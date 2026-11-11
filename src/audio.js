// Música instrumental original en public/audio. Solo comienza con un gesto del usuario.
let context, enabled = false
function ctx() { context ||= new (window.AudioContext || window.webkitAudioContext)(); return context }
function tone(freq, at, duration, volume, type = 'sine') {
  const audio = ctx(), osc = audio.createOscillator(), gain = audio.createGain()
  osc.type = type; osc.frequency.setValueAtTime(freq, at)
  gain.gain.setValueAtTime(.0001, at); gain.gain.exponentialRampToValueAtTime(volume, at + .025)
  gain.gain.exponentialRampToValueAtTime(.0001, at + duration)
  osc.connect(gain).connect(audio.destination); osc.start(at); osc.stop(at + duration + .03)
}
function rustle(at, length, volume) {
  const audio = ctx(), buffer = audio.createBuffer(1, Math.ceil(audio.sampleRate * length), audio.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / data.length)
  const source = audio.createBufferSource(), filter = audio.createBiquadFilter(), gain = audio.createGain()
  source.buffer = buffer; filter.type = 'bandpass'; filter.frequency.setValueAtTime(950, at)
  filter.frequency.linearRampToValueAtTime(2100, at + length)
  filter.Q.value = .55; gain.gain.value = volume
  source.connect(filter).connect(gain).connect(audio.destination); source.start(at)
}
export function setEffectsEnabled(value) {
  enabled = value
  if (value) ctx().resume()
  else context?.suspend()
}
export function soundEffect(kind) {
  if (!enabled) return
  const at = ctx().currentTime + .02
  if (kind === 'open') { rustle(at,.6,.11); tone(523.25,at+.1,.45,.055); tone(783.99,at+.29,.6,.042) }
  if (kind === 'page') { rustle(at,.42,.16); tone(659.25,at+.12,.25,.025,'triangle') }
  if (kind === 'flower') tone(659.25,at,.3,.03)
}
