---
tags:
  - seedling
plantedAt: 2023-01-30
lastTendedAt: 2024-03-22
---
## Davinci Resolve

1. In the project settings, set the target loudness level to -14 LUFs
2. During the edit, keep voiceover/dialogue, sound effects, memes, and music on separate tracks
3. After editing complete, normalize dialogue
	1. Normalize all clips to -12dB (independent)
	2. Use track-level Dialogue Leveler
	3. Apply Chad EQ preset
	4. If necessary, change processing order to DY FX EQ and then apply hard limiter track effect of -6 dB
	5. Use Dynamics compressor (or Dialogue Leveler) to compress audio
	6. Apply track-level De-Esser (default settings)
	7. Adjust VO fader until Main Out (with VO soloed) is hovering around -6
4. For sound effects, use track volume to lower to -18 to -20 dB
5. For music, normalize audio to -12 dB
	1. Audio-duck the music track by ensuring the VO Dynamics is set to "Send to Sidechain"
	2. In the Dynamics for the music track, use the Compressor to "Listen"  to the Sidechain.
	3. Set the threshold, ratio, hold, and release to get the desired effect (-25 to -30 dB while talking). ![[Pasted image 20230130134839.png]]
6. Add a Hard Limiter effect (not Dynamics panel) of -3 dB to Main Out bus.
7. Timeline > Bounce mix to new "master" track (if necessary)
	1. Analyze Audio Levels
	2. Normalize Audio Levels to -14 LUFs with -2.0 TP
	3. Analyze again, adjust master fader and manually watch loudness meter to keep Integrated LUFs around -1.0