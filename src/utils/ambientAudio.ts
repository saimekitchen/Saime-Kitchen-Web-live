/**
 * Ambient Audio Synthesizer for Minimalist Restaurant Experience
 * Uses Web Audio API to generate a warm, relaxing, low-frequency atmospheric lounge pad & vinyl warmth
 */

class AmbientSoundEngine {
  private audioCtx: AudioContext | null = null;
  private isRunning: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private filter: BiquadFilterNode | null = null;

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      this.audioCtx = new AudioContextClass();
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      // Gentle fade in
      this.masterGain.gain.exponentialRampToValueAtTime(0.12, this.audioCtx.currentTime + 3);

      this.filter = this.audioCtx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(450, this.audioCtx.currentTime);

      this.masterGain.connect(this.filter);
      this.filter.connect(this.audioCtx.destination);

      // Warm atmospheric harmonic chord: D2, A2, F#3, C#4 (Warm Minimalist Chord)
      const chordFrequencies = [73.42, 110.00, 185.00, 277.18];

      this.oscillators = chordFrequencies.map((freq) => {
        const osc = this.audioCtx!.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.audioCtx!.currentTime);

        const oscGain = this.audioCtx!.createGain();
        oscGain.gain.setValueAtTime(0.15, this.audioCtx!.currentTime);

        osc.connect(oscGain);
        oscGain.connect(this.masterGain!);
        osc.start();
        return osc;
      });

      this.isRunning = true;
    } catch (e) {
      console.warn('Web Audio Ambient not supported in this environment', e);
      this.isRunning = false;
    }
  }

  public stop() {
    if (!this.audioCtx || !this.isRunning) return;

    try {
      if (this.masterGain) {
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 1.5);
      }
      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try { osc.stop(); } catch {}
        });
        this.oscillators = [];
        if (this.audioCtx && this.audioCtx.state !== 'closed') {
          this.audioCtx.close();
        }
        this.isRunning = false;
      }, 1500);
    } catch {
      this.isRunning = false;
    }
  }

  public getStatus(): boolean {
    return this.isRunning;
  }
}

export const ambientEngine = new AmbientSoundEngine();
