"""Generate the original, looping chiptune used by the hidden scene."""
import math
import struct
import wave
from pathlib import Path

RATE = 22050
BEAT = 0.5
BARS = 16
DURATION = BARS * 3 * BEAT
samples = [0.0] * int(DURATION * RATE)


def hz(note):
    return 440 * 2 ** ((note - 69) / 12)


def add_note(note, start, length, level, voice="square"):
    first = int(start * RATE)
    last = min(len(samples), int((start + length) * RATE))
    frequency = hz(note)
    for index in range(first, last):
        t = (index - first) / RATE
        phase = (t * frequency) % 1
        if voice == "square":
            sound = 1.0 if phase < 0.5 else -1.0
        elif voice == "triangle":
            sound = 4 * abs(phase - 0.5) - 1
        else:
            sound = math.sin(2 * math.pi * phase)
        attack = min(1.0, t / 0.012)
        release = min(1.0, (last - index) / (RATE * 0.07))
        samples[index] += sound * level * attack * release * math.exp(-t * 1.4)


# A bright, bouncing tune with an audible rhythm, unlike the garden score.
melody = [
    [76, 79, 83, 79, 76, 74], [76, 79, 83, 86, 83, 79],
    [74, 76, 79, 76, 74, 71], [72, 76, 79, 84, 83, 79],
    [76, 79, 83, 79, 76, 74], [79, 83, 86, 88, 86, 83],
    [81, 79, 76, 74, 72, 71], [72, 76, 79, 76, 72, 71],
] * 2
chords = [[48, 55, 60], [52, 55, 59], [50, 57, 62], [53, 57, 60]] * 4

for bar in range(BARS):
    origin = bar * 3 * BEAT
    root, third, fifth = chords[bar]
    add_note(root - 12, origin, 0.42, 0.16, "triangle")
    add_note(fifth - 12, origin + BEAT, 0.4, 0.13, "triangle")
    add_note(fifth - 12, origin + 2 * BEAT, 0.4, 0.13, "triangle")
    for step, note in enumerate(melody[bar]):
        add_note(note, origin + step * BEAT / 2, BEAT * 0.44, 0.095)
    for step, note in enumerate([root, third, fifth, third, fifth, third]):
        add_note(note + 12, origin + step * BEAT / 2, BEAT * 0.28, 0.043, "sine")

output = Path(__file__).resolve().parents[1] / "public/audio/ady-sorpresa.wav"
output.parent.mkdir(parents=True, exist_ok=True)
with wave.open(str(output), "wb") as sound:
    sound.setnchannels(1)
    sound.setsampwidth(2)
    sound.setframerate(RATE)
    sound.writeframes(b"".join(struct.pack("<h", int(max(-1, min(1, value)) * 28000)) for value in samples))
print(output)
