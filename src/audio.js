// Melodía breve original sintetizada en el navegador; no descarga archivos.
let context, timer, nextTime = 0, step = 0, enabled = false
const notes = [329.63, 392, 440, 392, 329.63, 293.66, 261.63, 293.66, 329.63, 392, 523.25, 440, 392, 329.63, 293.66, 261.63]
function ctx() { context ||= new (window.AudioContext || window.webkitAudioContext)(); return context }
function tone(freq, at, duration, volume, type = 'sine') {
  const audio = ctx(), osc = audio.createOscillator(), gain = audio.createGain()
  osc.type = type; osc.frequency.setValueAtTime(freq, at)
  gain.gain.setValueAtTime(.0001, at); gain.gain.exponentialRampToValueAtTime(volume, at + .018)
  gain.gain.exponentialRampToValueAtTime(.0001, at + duration)
  osc.connect(gain).connect(audio.destination); osc.start(at); osc.stop(at + duration + .02)
}
function schedule() {
  if (!enabled) return
  const audio = ctx()
  while (nextTime < audio.currentTime + .5) {
    tone(notes[step % notes.length], nextTime, .62, .024)
    if (step % 4 === 0) tone(notes[step % notes.length] / 2, nextTime, 1.2, .009, 'triangle')
    nextTime += .48; step++
  }
}
export function setAudioEnabled(value) {
  enabled = value
  if (value) { ctx().resume(); nextTime = ctx().currentTime + .04; schedule(); timer ||= window.setInterval(schedule, 200) }
  else { window.clearInterval(timer); timer = null; context?.suspend() }
}
export function soundEffect(kind) {
  if (!enabled) return
  const at = ctx().currentTime + .02
  if (kind === 'open') { tone(392, at, .46, .045); tone(523.25, at + .13, .5, .034); tone(659.25, at + .29, .6, .026) }
  if (kind === 'page') { tone(587.33, at, .12, .025, 'triangle'); tone(783.99, at + .09, .18, .018, 'triangle') }
  if (kind === 'flower') tone(659.25, at, .3, .022)
}
