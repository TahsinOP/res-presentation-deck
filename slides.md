---
theme: slidev-theme-tahta
title: Tahsin Khan
info: Tahsin Khan, ERTS Lab (e-Yantra), IIT Bombay. 15-minute presentation for Dr Daniel Gehrig, 2 November 2026.
themeConfig:
  variant: minimal
mdc: true
routerMode: hash
colorSchema: light
layout: cover
bg: mesh
kicker: Research presentation
subtitle: ERTS Lab (e-Yantra), IIT Bombay
---

<!--
(0:20) Thank you for the time. I'll give a quick overview of what I've worked on, then a few projects grouped by area, then the one I'm most invested in, cooperative transport with two robots using only onboard sensing, and end with what hardware taught me and where I'd like to go. About thirteen minutes; please stop me anywhere.
-->

---
layout: default
kicker: Background
title: About me
clicks: 4
---

<AboutTimeline />

<!--
(0:25, one click per step) Mechanical engineering at NIT Karnataka with a minor in electronics. My first step into robotics was the Robocon team, building mechanisms for DD Robocon 2023. In my final year I wrote a review on soft autonomous mobile manipulators with Prof. Mervin Joe Thomas, published in Industrial Robot this year. Since August 2025 I've been at the ERTS Lab: competition themes, remote labs, mentoring interns, and since February a research project in cooperative transport.
-->

---
layout: default
kicker: Overview
title: What I have worked on
---

<WorkAreas />

<!--
(0:20) The areas of robotics I've worked in: perception; SLAM, in 2D, with 3D LiDAR and visual; navigation and control on mobile robots and vehicles; manipulation with arms and two mobile manipulators; imitation learning on SO-101 and UR5 arms; and robotics for education at e-Yantra.
Plan: earlier projects and two papers quickly, then perception and SLAM, then learning, then cooperative transport where these meet, and what that work taught me.
-->

---
layout: default
kicker: Overview
title: Earlier projects
---

<div class="grid grid-cols-4 gap-5 items-start text-[0.85em] mt-2">
<div>

<Pic src="img/robocon.jpg" caption="In build; team at the nationals" height="11.5rem" />

**DD Robocon** · NITK, 2023

- Ring-shooting robots; national qualifier

</div>
<div>

<Vid src="videos/arms.mp4" caption="Vicon, driving, then Nav2 · 2×" height="11.5rem" fill />

**Ackermann vehicle** · IITB, 2024

- Autonomous RC car: state estimation, 2D SLAM

</div>
<div>

<Vid src="videos/nitk.mp4" caption="Filmed by the CSD team" height="11.5rem" fill />

**Campus shuttle** · NITK, 2025

- Guided the software: Autoware, LIO-SAM

</div>
<div>

<Vid src="videos/quadruped.mp4" caption="MuJoCo and RViz · 2×" height="11.5rem" fill />

**Quadruped** · personal, 2025

- Trot gait and waypoint walking

</div>
</div>

<!--
(0:35) Earlier projects, in order. My first step into robotics was DD Robocon 2023 with the NITK team: in the mechanical subsystem I designed the chassis and mechanisms for two robots, and we built catapult and dual-roller shooters to throw rings onto poles up to 12 m away; NITK's first national qualification, top 50 in the country. At the ARMS Lab at IIT Bombay with Prof. Arpita Sinha, I made a stock RC car autonomous on ROS 2: state estimation with an IMU and Vicon Kalman filter, 2D LiDAR SLAM, then AMCL and Nav2 with pure pursuit. At NITK I guided the software side of an autonomous campus shuttle on an electric chassis: chose the sensors, set up Autoware on ROS 2, and LIO-SAM to map the campus; the hardware and the runs you see were done by the CSD team: the first autonomous steering test, a point-to-point run, and a run with a pedestrian walking into the path. And a simulated Unitree B2 quadruped in MuJoCo bridged to ROS 2: leg IK, a trot gait and waypoint navigation.
Then two papers.
-->

---
layout: default
kicker: Overview
title: Publications
---

<div class="grid grid-cols-2 gap-6 items-stretch mt-1">

<div class="pub">
<div class="pub-tag">Published · <em>Industrial Robot</em>, 2026</div>
<div class="pub-title">Soft autonomous mobile manipulators in agricultural automation: a review</div>
<div class="pub-desc">How soft grippers, arms and mobile bases come together for handling crops, and why integrating them is still the open problem.</div>
<Pic src="img/samm-field-robots.jpg" height="9.2rem" fit="contain" />
</div>

<div class="pub">
<div class="pub-tag">In preparation · eYRC 2025–26</div>
<div class="pub-title">Remote labs for robotics at national scale</div>
<div class="pub-desc">Krishi CoBot: teams develop in simulation, then run a UR5 and a mobile robot over the internet.</div>
<div class="grid grid-cols-[1.4fr_1fr] gap-3">
<Pic src="img/remote-labs.png" height="5.2rem" fit="contain" />
<Vid src="videos/krishi.mp4" height="5.2rem" fill />
</div>
<div class="grid grid-cols-3 gap-3 mt-3">
  <StatCard value="649" label="teams" size="sm" />
  <StatCard value="2436" label="participants" size="sm" />
  <StatCard value="475" unit="h" label="on real robots" size="sm" />
</div>
</div>

</div>

<!--
(0:45) Two papers. The review, published in Industrial Robot this year with Prof. Mervin Joe Thomas at NITK, covers soft autonomous mobile manipulators for agriculture: soft grippers, mobile bases in unstructured fields and the integrated system. The finding: each part has matured, but integrating them is the open problem.
The second, in preparation, comes from my main role at the ERTS Lab, building national competitions and the remote labs behind them. Most students learning robotics never run code on a real robot. For the Krishi CoBot theme I developed, a UR5 and a mobile robot work in a mock greenhouse; teams build in simulation, then book time on the real setup over the internet. 649 teams, 2436 participants, 475 hours of remote hardware access. We're writing a paper on making such labs scalable and low-cost.
That's the breadth. Now one thread through the rest of the work: perception first.
Only if time: I also mentor eYSIP interns, ran faculty development programmes on embedded systems for about 80 professors, and a ROS workshop for the Women in Robotics initiative.
-->

---
layout: section
index: "01"
bg: aurora
kicker: Projects
title: Perception and SLAM
---

<!--
SKIPPABLE. (0:05) From a single camera on a small car, to 3D visual SLAM, to LiDAR on a drone.
-->

---
layout: default
kicker: e-Yantra Robotics Competition 2026–27 · inspired by Duckietown
title: Niti Vahan
---

<div class="grid grid-cols-2 gap-x-8">
<div>

- Monocular pipeline: Raspberry Pi + one USB camera
- Lane detection: bird's-eye warp, colour segmentation, polynomial fit

</div>
<div>

- Obstacle detection, lane switching, ArUco-based parking
- PID steering; matched CoppeliaSim digital twin
- Selected by 1500 teams

</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-5">
<Vid src="videos/niti-sim.mp4" caption="Full run in the CoppeliaSim digital twin · 6× speed" height="13rem" fill />
<Vid src="videos/niti.mp4" caption="On hardware: lane following and obstacle avoidance" height="13rem" fill />
</div>

<!--
(0:45) Starting with perception from one camera. Niti Vahan is a new theme I researched and developed for the e-Yantra Robotics Competition 2026–27, on autonomous driving under city road rules, inspired by Duckietown. My part was the electronics and the perception and control stack, deliberately minimal so student teams can reproduce it: a Raspberry Pi and one USB camera. Lanes come from a bird's-eye-view warp, colour segmentation and a polynomial fit, tracked with PID steering; on top, obstacle detection, lane switching and ArUco-based parking. Left: a full run in the matched CoppeliaSim digital twin teams start with (6×); right: the same stack on the car. 1500 teams selected it.
-->

---
layout: default
kicker: eYSIP 2025 · research intern, my project
title: Visual SLAM from scratch
---

<div class="grid grid-cols-2 gap-x-8">
<div>

- Open3D and OpenCV only: ICP, keyframes, dense map
- Loop closure and pose-graph optimisation

</div>
<div>

- Bag-of-words relocalisation, refined by ICP
- RealSense D455 and Orin NX, tested handheld

</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-5">
<Pic src="img/vslam-hardware.jpg" caption="The UAV hardware stack" height="11rem" />
<Vid src="videos/vslam.mp4" caption="Dense map with the optimised trajectory" height="11rem" fill />
<Pic src="img/vslam-localization.jpg" caption="Live 6-DoF localisation in a prebuilt map" height="11rem" fit="contain" />
</div>

<!--
(0:45) Why: we needed 3D visual SLAM plus navigation on our drone, and ORB-SLAM3 and RTAB-Map were impractical to adapt; there was no end-to-end stack like Nav2 for 3D. So I built the front end and back end myself, which is also how I learned SLAM properly.
TODO (Tahsin): refine the motivation.
My own project as an eYSIP intern. ORB-SLAM3 and RTAB-Map were impractical to adapt for our drone, so we built the front and back end from scratch with Open3D and OpenCV: ICP registration, keyframing, local and global loop closure with pose-graph optimisation, and bag-of-words relocalisation refined by ICP for full 6-DoF pose. Validated handheld on a RealSense D455 with an Orin NX. I also designed, but didn't build, an extension to tightly coupled VIO with IMU preintegration factors.
-->

---
layout: default
kicker: eYSIP 2026 · mentored (1 intern), continuing the SLAM-on-UAV work
title: LiDAR SLAM on a UAV
---

<div class="grid grid-cols-2 gap-x-8">
<div>

- Holybro X500, RoboSense Airy, Orin Nano
- Compared KISS-ICP, LIO-SAM and FAST-LIO

</div>
<div>

- FAST-LIO back end: loop closure, pose graph
- **Drift traced to LiDAR–IMU extrinsics and heat**

</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-5">
<Pic src="img/lidar-sim.jpg" caption="Simulation: mapping a Gazebo world" height="10.5rem" />
<Vid src="videos/lidar.mp4" caption="Manual flight, then the KReSIT building map" height="10.5rem" fill />
<Pic src="img/lidar-cc-map.jpg" caption="3D map of the Computing Complex" height="10.5rem" />
</div>

<!--
(0:50) Why: we wanted reliable 3D mapping on a payload-limited drone, where cameras struggle with lighting and texture. The question was which LiDAR-inertial pipeline survives real flight on a small onboard computer.
The continuation of the SLAM-on-UAV work, this time with LiDAR. I mentored one intern on this: he built it, I guided it. Compared KISS-ICP, LIO-SAM and FAST-LIO in PX4 simulation, then a custom back end on FAST-LIO odometry with keyframes, Scan Context loop detection checked with GICP, and pose-graph optimisation. With the issues below fixed, LIO-SAM produced 3D maps from manual flights. Autonomous navigation is ongoing.
The part I want to highlight: the maps drifted, and the cause was not the algorithm. It was a LiDAR–IMU extrinsic calibration error, made worse by thermal throttling on the Orin Nano. The estimator had no way to know its own model was wrong.
TODO (Tahsin): refine the motivation.
-->

---
layout: section
index: "02"
bg: aurora
kicker: Projects
title: Learning
---

<!--
SKIPPABLE. (0:05) The other side: learning, where the policy replaces the model.
-->

---
layout: default
kicker: IEEE ICRA 2026 · my team (lemax), with Prof. Nived Chebrolu
title: LeHome Challenge
---

<div class="grid grid-cols-[1fr_1fr] gap-8 items-start">
<div>

- Bimanual garment folding with SO-101 arms in Isaac Sim
- Four specialist SmolVLA policies, routed by a YOLO garment classifier, vs one generalist
- Also tried ACT, X-VLA, diffusion policy and π0

<div class="grid grid-cols-3 gap-3 mt-5">
  <StatCard value="55" unit="%" label="local eval" />
  <StatCard value="49" unit="%" label="final server" />
  <StatCard value="32" unit="/62" label="rank" />
</div>

</div>
<div>

<Vid src="videos/lehome.mp4" caption="SmolVLA folding each garment type in Isaac Sim · 4×" height="15rem" fill />

</div>
</div>

<!--
(0:40) This one I worked on myself, with Prof. Chebrolu. The LeHome Challenge at ICRA 2026 was a simulation competition on deformable manipulation: folding garments with two SO-101 arms in Isaac Sim, four garment categories spawned at random. The video is our SmolVLA policy on one garment of each category, sped up four times. We compared four specialist SmolVLA policies, one per category, routed by a YOLO classifier, against a single generalist; both ended up about the same, 55% locally and 49% on the final server, rank 32 of 62. We also tried ACT, X-VLA, diffusion policy and π0.
-->

---
layout: default
kicker: eYSIP 2026 · mentored (3 interns) and co-mentored (1 intern)
title: Imitation learning on real arms
---

<div class="grid grid-cols-2 gap-x-8">
<div>

- Bimanual SO-101: 225+ demos, ACT vs SmolVLA
- Wrist camera ablation: RGB vs RealSense D405

</div>
<div>

- UR5 + RG2, which LeRobot does not support: teleop and recording into LeRobot
- SmolVLA fine-tuned and run on the arm

</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-5">
<Vid src="videos/so101-stack.mp4" caption="Bimanual stacking, SO-101 · 1.5×" height="12rem" fill />
<Vid src="videos/ur5.mp4" caption="UR5: teleoperation, recording, SmolVLA grasp" height="12rem" fill />
</div>

<!--
(0:40) Two projects I defined and mentored; the interns built them. Three interns on a bimanual SO-101 setup: 225+ teleoperated demonstrations, ACT against SmolVLA, where SmolVLA coordinated the two arms more smoothly, and an ablation swapping the RGB wrist camera for a RealSense D405. One intern, co-mentored, on bringing the LeRobot workflow to an industrial UR5 with a handheld teleoperation device.
The takeaway across the learning work: the policies handled contact we'd never want to model by hand, but when they failed it was very hard to say why. Calibration mismatch, timing, lighting, all looked the same from outside.
-->

---
layout: section
index: "03"
bg: aurora
kicker: Research project · Feb 2026 – present
title: Cooperative transport
subtitle: With Prof. Shivaram Kalyanakrishnan, Prof. Harshad Khadilkar and Prof. Nived Chebrolu, IIT Bombay
---

<!--
(0:05) The project I'm most invested in, and where the two threads meet: the same SO-101 arms, now on mobile bases, with estimation and control doing the coordination.
-->

---
layout: vs
kicker: Why this project
title: Can two robots carry a payload using only <em>local sensing</em>?
label: vs
left: { title: "Typical setups in the literature", items: ["Motion capture for robot and payload pose", "Force/torque sensors at the grasp", "Large or omnidirectional platforms", "A shared map or global frame"] }
right: { title: "This project", items: ["Wrist cameras only", "No force/torque sensing", "Small differential-drive robots, built in-house", "No shared map: the grasp links the robots"] }
---

<!--
(0:35) Why: most cooperative transport demonstrations rely on motion capture, force/torque sensing at the grasp, and large or omnidirectional platforms. The question is whether cooperation survives with only onboard sensing, the cameras on the robots' wrists, on small differential-drive robots that cannot move sideways.
Context if asked: nonholonomic multi-robot transport work at IIT Bombay (Patra, Sinha, Guha) used motion capture and reported failure at about 6 cm of accumulated odometric error; our arena matches theirs for a direct comparison. The closest recent vision-based approach (leader–follower with control barrier functions, 2026) needs force/torque sensing on every robot.
Be accurate about computation: perception and the estimator run on each robot's Orin; the QP currently runs on one computer with the partner streaming its joint angles. The formulation decentralises by consensus on the payload twist; a distributed solve is future work.
-->

---
layout: default
kicker: Cooperative transport
title: Built in-house
---

- Open-source hardware: SO-101 arm on a TurtleBot3 base, wrist RealSense D405, Jetson Orin
- Developed in MuJoCo first, then run on the robots

<div class="grid grid-cols-2 gap-6 mt-4">
<Vid src="videos/coop.mp4" caption="Hardware run · 2× speed" height="14rem" />
<Vid src="videos/mujoco.mp4" caption="MuJoCo with the full ROS 2 stack, then transport and placing" height="14rem" />
</div>

<!--
(0:30) Two robots built in-house from open-source hardware: SO-101 arms on TurtleBot3 bases, a RealSense D405 on each wrist, a Jetson Orin on each robot. Developed in MuJoCo first with the same ROS 2 stack (right), then run on the robots (left, 2× speed).
-->

---
layout: statement
bg: grain
kicker: Key idea
title: The grasp itself tells each robot where its <em>partner</em> is.
---

<!--
(0:10) The one idea to take away from this project.
-->

---
layout: two-cols
kicker: Cooperative transport
title: Inter-robot localisation for free
---

$$
{}^{B_1}T_{B_2} = F_1(q_1)\; W_1\; W_2^{-1}\; F_2(q_2)^{-1}
$$

<v-clicks>

- The shared grasp closes a kinematic chain between the two bases
- $F_i$ from arm encoders; $W_i$ (gripper → payload) constant while the grasp holds
- No odometry, no shared map: no drift

</v-clicks>

<div v-click class="mt-4">
<Callout icon="lucide:lightbulb">Prior work assumes each robot knows its grasp exactly. Here the wrist camera measures it, and localisation comes as a by-product.</Callout>
</div>

::right::

<Vid src="videos/ClosedChain.mp4" caption="Animation from the project documentation" height="20rem" />

<!--
(1:00) Once both robots hold the payload, they form a closed kinematic chain: base, arm, grasp, payload, grasp, arm, base. F comes from the joint encoders every tick; W, gripper to payload, is constant while the grasp is rigid, so the wrist camera only has to measure it. So each robot gets its partner's pose with no odometry, no shared map, no motion capture, and nothing integrated over time, so no drift. Planning and control are in the payload frame; arena landmarks only locate the pair in the room.
Last click: prior force-sensorless methods assume each robot knows its grasp exactly (Verginis et al., 2017); here it's measured, and localisation comes as a by-product.
If asked about accuracy: drift-free is not error-free. A camera-mount error gives a constant offset, which is why the estimator keeps a covariance floor (backup slides).
-->

---
layout: default
kicker: Cooperative transport
title: Estimation and control
---

<div class="grid grid-cols-[1fr_1.15fr] gap-10 items-start">
<div>

**Estimator** · on each robot

- Wrist camera sees a marker board on the payload, 30 Hz
- SE(3) Kalman filter on each $W_i$, 50 Hz on the Orin
- χ² gate rejects bad detections

**Controller** · one QP, both bases and arms

- Coupled only through relative orientation, which the chain gives without drift
- Differential-drive bases: the arms absorb what the wheels cannot
- Soft coupling: always feasible, looser when the estimate is uncertain

</div>
<div>

$$
\min_{x \in \mathbb{R}^{14}}\;
\underbrace{\lVert J x - \mathcal{V}^\star \rVert^2}_{\text{move the payload}}
+ \underbrace{\rho(\Sigma)\,\lVert C x \rVert^2}_{\text{robots agree}}
+ \underbrace{\lVert x - x_{\mathrm{pref}} \rVert^2}_{\text{posture}}
$$

<div class="text-center text-sm opacity-70 -mt-2 mb-3">subject to joint and velocity limits · OSQP, 50 Hz</div>

<Vid src="videos/RodToSpring.mp4" caption="Hard constraint vs soft cost, from the project documentation" height="11rem" fill />

</div>
</div>

<!--
(1:00) Estimator: the wrist camera sees a marker board, PnP measures W, and an SE(3) Kalman filter averages it, with a chi-squared gate to drop bad detections and a covariance floor so a fixed camera-mount bias can't make it overconfident.
Controller: one QP over both bases and both arms. Why relative orientation is the quantity that matters: a 5° heading disagreement at 0.2 m/s gives 17.5 mm/s of conflicting motion, past the grasp's estimated 10–20 mm tolerance in under a second (analysis); errors in where the pair is in the room only misplace the payload, gracefully. The bases are differential drive and cannot move sideways, so the arms absorb what the wheels can't, the planner slows when the arms near their joint limits, and with headings fixed at grasp only a side-by-side layout is drivable. Move the payload as planned, keep the two robots' predictions of the payload motion consistent, stay near a preferred posture. The coupling needs only the relative orientation, which is exactly what the grasp chain gives without drift. It's a soft cost, so the QP is always feasible, and its weight drops as the orientation uncertainty grows: rho = rho_0 / (1 + kappa tr Sigma_phi), with kappa set so the weight halves at 5 degrees.
If he wants depth: each piece was derived and checked numerically, e.g. the closed-chain relation against constructed geometry, and why the covariance floor must come after the update (backup slides).
OSQP solve time if asked: median 380 µs measured on a workstation, not yet on the Orin.
Notice the estimator runs at a fixed 50 Hz from 30 Hz detections, and the gate decides which detections to trust. That is a very crude way of deciding what to trust.
Status, one breath at the end (0:10): the full system runs on the two robots and the transport works; quantitative validation is next, chain against odometry on turns, with motion capture only as ground truth. The aim from the start was a working base for mobile manipulation, then cooperative tasks with learning on top, which is where the rest of this talk goes.
-->

---
layout: statement
bg: grain
kicker: Research direction
title: Known structure, learning for the rest, and knowing <em>when</em> to trust each.
---

<!--
(0:20) One line through everything I've shown. I want robots that are reliable in the real world by combining structure we understand (geometry, physics, estimation) with learning for what we can't model. The part I keep running into is "when": when the model is enough, and when to trust the learned part.
Be precise if he picks up on "hybrid": I haven't built a hybrid system yet. The transport platform is where I'd start.
-->

---
layout: default
kicker: Research direction
title: Where the field is, as I understand it
---

<div class="grid grid-cols-3 gap-6 mt-1 text-[0.82em]">
<div>

**Learning where models are hard**

- Legged robots: an RL policy over PD joint control <span class="cite">Hwangbo et al., Sci. Robot. 2019</span>
- Drone racing: RL beat human champions <span class="cite">Swift, Nature 2023</span>
- Manipulation: VLAs, brittle under small shifts <span class="cite">LIBERO-Plus, 2025</span>

</div>
<div>

**A model, plus learning for what it misses**

- Drones: learned wind effects on nominal dynamics <span class="cite">Neural-Fly, Sci. Robot. 2022</span>
- Swarms: learned downwash between drones <span class="cite">Neural-Swarm2, T-RO 2022</span>
- Race cars: learned dynamics error inside MPC <span class="cite">Kabzan et al., RA-L 2019</span>
- IMU odometry: a learned motion prior in a filter <span class="cite">TLIO, RA-L 2020</span>

</div>
<div>

**Structure to check and to schedule**

- Driving: end-to-end, with a separate validation layer <span class="cite">Waymo Foundation Model, 2025</span>
- A slow reasoner directing a fast policy <span class="cite">Gemini Robotics 1.5, 2025</span>
- Events filling the gaps between frames <span class="cite">Gehrig and Scaramuzza, Nature 2024</span>

</div>
</div>

<div v-click class="mt-5">
<Callout icon="lucide:search">Across platforms, learning pays most where the model misses: wind, slip, contact. How far to trust the learned part is still usually fixed at design time.</Callout>
</div>

<!--
(0:45) A rough picture from my reading, not a survey, and across platforms, not just arms.
First column: where models are hard, learning took over. Legged robots run an RL policy on top of simple PD joint control; Swift beat human drone-racing champions with RL. But even these lean on models: ANYmal learned an actuator model from real data to fix the simulator, and Swift added residual models of dynamics and perception from real data. And VLAs in manipulation are brittle under small shifts, as LIBERO-Plus shows.
Second column, the pattern I find most convincing: keep the physics model as the prior and learn only what it misses. Neural-Fly learns wind effects on top of nominal drone dynamics and adapts online; Neural-Swarm2 learns the downwash between drones flying close together; learning-based MPC for racing learns the vehicle model's error, things like tyre slip; TLIO puts a learned motion prior inside an EKF.
Third column: big deployed systems keep structure to check and to schedule. Waymo is trained end-to-end but keeps a validation layer; Gemini Robotics 1.5 has a slow reasoning model planning and calling a fast VLA; and in your Nature paper, events fill the gaps between low-rate frames. (Name it, don't explain it to him.)
(click) The common thread: classical models carry the prior, learning fills what they miss, wind, slip, contact. What's usually still fixed by design is how far the learned part is trusted. That's what my own projects kept showing me.
If asked about Gemini Robotics 1.5: two models. Gemini Robotics-ER 1.5 is a vision-language model that reasons about the scene and breaks a task into steps; it calls Gemini Robotics 1.5, the VLA, with short language instructions, and the VLA turns each into motor commands. The ER model has a thinking budget that trades latency against accuracy, set by the developer, not by the situation.
If asked about Tesla: closest to pure end-to-end; don't discuss safety numbers, they are contested.
If asked about learned inertial odometry beyond TLIO: there is newer work on making these priors robust to sampling rate and motion symmetries; you've read his EqNIO and Lie Events papers, mention only if he raises them.
Sources: on the References backup slides.
-->

---
layout: default
kicker: Research direction
title: What hardware taught me
---

<div class="grid grid-cols-3 gap-6 mt-1 items-stretch">

<div class="lesson">
<div class="lesson-n">01 · Cooperative transport</div>
<div class="lesson-t">The model held; the contact didn't.</div>
<div class="q-k">On hardware</div>
<div class="lesson-b">The QP assumes a rigid grasp. A locked gripper lifted a robot; the TPU gripper slips, and nothing detects it.</div>
<div class="q-k">Takeaway</div>
<div class="lesson-b">Keep the model for coordination; learn the contact effects it misses.</div>
</div>

<div class="lesson">
<div class="lesson-n">02 · Imitation learning</div>
<div class="lesson-t">The policy didn't know what should happen.</div>
<div class="q-k">On hardware</div>
<div class="lesson-b">A slight camera shift stalled our VLA policies on the SO-101 and UR5.</div>
<div class="q-k">Takeaway</div>
<div class="lesson-b">Predicting the outcome gives the system something to check its actions against.</div>
</div>

<div class="lesson">
<div class="lesson-n">03 · IMU-only odometry</div>
<div class="lesson-t">Physics alone couldn't see enough.</div>
<div class="q-k">On hardware</div>
<div class="lesson-b">x, y and heading from the IMU drifted over long runs, even with an EKF and preintegration.</div>
<div class="q-k">Takeaway</div>
<div class="lesson-b">Position isn't observable from an IMU alone; constraints or a learned prior must fill the gap.</div>
</div>

</div>

<div v-click class="mt-6">
<Callout icon="lucide:lightbulb">Models where they're good, learning where they miss, and knowing which is which.</Callout>
</div>

<!--
(1:10) Three things hardware taught me. One sentence of story and one of lesson each; don't read the cards.
1. Transport, which you've just seen. The QP assumes a rigid grasp. Locking the payload built internal stress until a robot lifted; the TPU gripper fixed that but sometimes slips, and nothing detects it. The model was right about coordination; what it missed was contact, and the robot can't tell when its assumption has broken.
2. On the interns' VLA setups, a slight camera shift or small scene change stalled the policy completely. Approaches that predict the plan or the outcome and let a planner execute it held up better. A pixels-to-actions policy has nothing to check itself against.
3. At the ARMS Lab we estimated the car's x, y and heading from the IMU alone, with an EKF and preintegration, and it drifted. Say why: position isn't observable from an IMU alone, so errors grow without bound. The missing information has to come from constraints, like the car not moving sideways, or a learned motion prior.
(click) The common thread: models where they're good, learning where they miss, and knowing which is which.
Then the CLOSING in the Thank-you notes, and advance.

IF HE ASKS WHAT YOU'D TRY (examples, not promises):
- Transport: a learned residual on the QP for contact effects, its authority set by the estimator's covariance; slip detection from the grasp innovation.
- VLA: predict where the object should go, let a classical planner track it, compare with the VLA under camera shifts.
- IMU: a learned displacement prior fused in the EKF, with the no-sideways-motion constraint as structure.

LITERATURE IF ASKED:
- Learned inertial odometry: TLIO (RA-L 2020) and later work fused with an EKF. His EqNIO and Lie Events only if he raises them.
- VLA robustness: LIBERO-Plus (2025). World-action models: the 2026 WAM tutorial.
- Plan-then-track manipulation: name a specific paper only if its exact title and authors are checked.
- Learned cooperative transport: decPLM (2025), CooHOI (NeurIPS 2024), DeReCo (2026); force-sensorless model-based methods assume known grasps (Verginis et al., 2017).
-->

---
layout: end
bg: mesh
title: Thank you
subtitle: Questions?
---

<!--
(0:10) Thank you. Leave this up during questions.

CLOSING (said after the last click on "What hardware taught me", ~0:30, then advance):
"That's really why I'm applying for a PhD. I've spent the last two years on the structured side, and what I want now is to go deep on the learning side: building learned systems that are efficient and know when to trust themselves. Your group's work on deciding when to sense and when to act is the closest I've seen to that, which is why I reached out. Thank you, I'd be glad to discuss any of it."

IF HE ASKS WHAT YOU'D WORK ON:
"I don't have a fixed topic yet; those three lessons are where my interest comes from, and I'd like to shape it with you."

IF HE ASKS WHAT YOU KNOW ABOUT LEARNING:
Be specific: ACT, SmolVLA, diffusion policy and others compared in LeHome; ACT vs SmolVLA on real SO-101 and UR5. Honest gap: training and deploying, not yet designing new methods.

QUESTIONS TO ASK HIM (pick two or three):
- What would a first student in your group work on?
- For the August 2027 PhD intake (NUS deadline 15 January), should I name you as proposed supervisor, and is there anything you'd like me to strengthen before then?
- How do you see event-based sensing connecting to manipulation or multi-robot systems?
- What hardware will the group have at the start?

PREPARED ANSWERS:
- Is it an invariant EKF? No. A right-perturbation (body-frame) error-state Kalman filter on SE(3). The state is constant with H = I to first order, so invariance has no dynamics to help with. An older CV said right-invariant; the current CV says "SE(3) EKF", which is accurate.
- EKF vs factor graph? Constant state, cheap running geodesic average at 50 Hz, gives a covariance every tick for the controller. A smoother would help if W changes slowly (slip) or if hand-eye extrinsics were estimated jointly.
- Why SE(3), not a minimal parameterisation? No global singularity-free 3-parameter chart for rotations; perturbations in se(3) avoid singularities and keep covariance in the tangent space. Exp/Log map between twists and transforms; the adjoint maps tangent vectors and covariances between frames: Σ' = Ad Σ Adᵀ.
- Left vs right perturbations: right = body frame X·Exp(δ), left = world frame Exp(δ)·X. The invariant EKF gives state-independent error dynamics when the dynamics are group-affine, so better consistency (e.g. VIO yaw).
- Detections drop? W-hat is held (constant), relative pose still from encoders. P grows by the floor each tick, so the coupling softens and the gate re-opens. 60 consecutive rejections → re-seed.
- Floor caveat: it's added per tick, not per second, so between 30 Hz detections the reported σ rises and falls and depends on the tick rate. Scaling it by Δt is the fix I'd make.
- Covariance-to-weight mapping, stability? κ from a 5° half-strength design point. No formal stability proof; the QP is feasible every tick; closed loop checked in simulation.
- Status: runs on hardware with a side-by-side grasp. Quantitative validation against motion capture is in progress; the covariance floor is still a conservative 10 mm / 2° placeholder until that capture exists.
- How would event cameras help? The 30 Hz wrist camera blurs and loses the board during fast arm motion; an event camera gives low-latency tracking exactly then.
- What did you build vs interns? Cooperative transport, Niti Vahan, Krishi CoBot: mine (with advisors / the team). Visual SLAM 2025: I was the intern. LiDAR UAV and imitation learning 2026: interns built them, I defined and mentored.
- Isn't end-to-end replacing the classical pipeline? It's replacing hand-written modules, not structure. Waymo trains end-to-end but keeps explicit objects and maps and a separate validation layer; manipulation stacks split a slow reasoner from a fast controller. Those splits, and when each part runs, are still fixed by design rather than decided by the robot.
- Why not just estimate the mount bias? From one wrist camera with a constant state it isn't observable: it's absorbed into the grasp estimate. It needs an independent reference, e.g. the closed chain compared against landmarks, or the partner's view.
- Have you used event cameras? No. The first place I'd try one is the wrist camera during fast arm motion, where the 30 Hz camera blurs and loses the board.
- Tactile sensing? It's where I'd like to go for manipulation, especially for grasp slip like in the transport project. Event-based optical tactile sensors exist (Evetac, 2023), which connects it to event-driven sensing. Only if he asks.
- Why not learn everything, as legged robots do? Legged locomotion shows RL over simple PD control works very well where contact is hard to model, but those policies are trained in simulators corrected with real data. I'd use learning where the model misses, and keep the model where it is good.
-->

---
layout: default
kicker: Backup
title: Estimator details
aside: backup
---

<div class="text-[1.2em] leading-loose mt-2">

- **Measurement** $\;W_{i,k} = {}^{E}T_{C}\,{}^{C}T_P^{(k)}$ from PnP
- **Innovation** $\;\xi_k = \mathrm{Log}\big(\hat W_i^{-1} W_{i,k}\big),\quad S_k = P_i + R_k$
- **Gate** $\;\xi_k^\top S_k^{-1}\xi_k > \chi^2_{6,\,0.99} \approx 16.8 \Rightarrow$ reject
- **Update** $\;\hat W_i \leftarrow \hat W_i\,\mathrm{Exp}(K_k\xi_k)$
- **Floor** $\;P_i \leftarrow P_i + P_{\min}$, after every update

</div>

<!--
Constant state, so no motion model and Q = 0; H = I to first order. Seeded from the geodesic mean of 60 frames at grasp. Joseph-form covariance update. The floor goes after the update; before it, the update erases it. In simulation with an 8 mm / 1.5° mount bias, no floor gave a reported σ of 0.14 mm against a 10.8 mm true error: 76× overconfident.
-->

---
layout: default
kicker: Backup
title: One estimator tick
aside: backup
---

<EstimatorTick />

<!--
30 Hz detections land in 50 Hz ticks. Each tick: update if a detection arrived and passed the gate, then add the floor. The fourth detection is a planted outlier and is rejected. Scalar sketch with the docs' numbers (camera σ 2 mm, floor 10 mm), not logged data. Note the per-tick floor makes σ rise between detections.
-->

---
layout: two-cols
kicker: Backup
title: Why relative heading matters
aside: backup
---

$$
\lVert \Delta v \rVert \approx \lVert v \rVert\,\lVert \delta\phi \rVert
$$

- 0.2 m/s and 5° → 17.5 mm/s of disagreement
- Rigid payload, position-controlled servos: nothing absorbs it
- Past a 10–20 mm tolerance in about 0.9 s (analysis)

::right::

<Vid src="videos/HeadingMismatchStrain.mp4" caption="From the project documentation" height="20rem" />

<!--
This is where κ comes from: the coupling should be at half strength by 5 degrees of orientation uncertainty. The tolerance is an engineering estimate, not a measurement.
-->

---
layout: default
kicker: Backup
title: Hybrid methods in recent work
aside: backup
---

<div class="grid grid-cols-2 gap-x-8 gap-y-5 mt-2">
<div>

**Driving**

Waymo Foundation Model (2025): end-to-end trained, structured outputs, separate trajectory validation. Alpamayo-R1 (NVIDIA, 2025): reasoning VLA with a unicycle-model action decoder.

</div>
<div>

**Manipulation**

Gemini Robotics 1.5 (2025): reasoning model orchestrates a VLA. ResiP (Ankile et al., 2024): RL residual on a frozen diffusion policy. AEGIS (2025): CBF safety layer on VLAs.

</div>
<div>

**Legged and aerial**

DTC (Jenelten et al., *Science Robotics* 2024): optimiser plans footholds, RL tracks. Actor-Critic MPC (Romero et al., *T-RO* 2025): differentiable MPC as the actor's last layer.

</div>
<div>

**Estimation and multi-robot**

MASt3R-SLAM (CVPR 2025): learned 3D prior, classical optimisation. GCBF+ (*T-RO* 2025): learned graph CBF for multi-robot safety.

</div>
</div>

<!--
Only if asked for examples. Actor-Critic MPC is from the UZH Robotics and Perception Group.
-->

---
layout: default
kicker: Backup
title: References (1/2)
aside: backup
---

<div class="refs">

1. J. Hwangbo, J. Lee, A. Dosovitskiy et al. Learning agile and dynamic motor skills for legged robots. *Science Robotics* 4, 2019. [doi:10.1126/scirobotics.aau5872](https://doi.org/10.1126/scirobotics.aau5872)
2. E. Kaufmann, L. Bauersfeld, A. Loquercio et al. Champion-level drone racing using deep reinforcement learning (Swift). *Nature* 620, 2023. [doi:10.1038/s41586-023-06419-4](https://doi.org/10.1038/s41586-023-06419-4)
3. LIBERO-Plus: In-depth Robustness Analysis of Vision-Language-Action Models. [arXiv:2510.13626](https://arxiv.org/abs/2510.13626), 2025.
4. M. O'Connell, G. Shi, X. Shi et al. Neural-Fly enables rapid learning for agile flight in strong winds. *Science Robotics* 7, 2022. [doi:10.1126/scirobotics.abm6597](https://doi.org/10.1126/scirobotics.abm6597)
5. G. Shi, W. Hönig, X. Shi et al. Neural-Swarm2: Planning and Control of Heterogeneous Multirotor Swarms Using Learned Interactions. *T-RO* 38, 2022. [doi:10.1109/TRO.2021.3098436](https://doi.org/10.1109/TRO.2021.3098436)
6. J. Kabzan, L. Hewing, A. Liniger et al. Learning-Based Model Predictive Control for Autonomous Racing. *RA-L* 4, 2019. [doi:10.1109/LRA.2019.2926677](https://doi.org/10.1109/LRA.2019.2926677)
7. W. Liu, D. Caruso, E. Ilg et al. TLIO: Tight Learned Inertial Odometry. *RA-L* 5, 2020. [doi:10.1109/LRA.2020.3007421](https://doi.org/10.1109/LRA.2020.3007421)
8. Waymo. Demonstrably Safe AI for Autonomous Driving. [Waymo blog](https://waymo.com/blog/2025/12/demonstrably-safe-ai-for-autonomous-driving/), 9 December 2025.
9. Gemini Robotics Team, Google DeepMind. Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer. [arXiv:2510.03342](https://arxiv.org/abs/2510.03342), 2025.
10. D. Gehrig and D. Scaramuzza. Low-latency automotive vision with event cameras. *Nature* 629, 1034, 2024. [doi:10.1038/s41586-024-07409-w](https://doi.org/10.1038/s41586-024-07409-w)

</div>

<!--
Sources named on "Where the field is". Leave up only if he asks for a source.
-->

---
layout: default
kicker: Backup
title: References (2/2)
aside: backup
---

<div class="refs">

11. NVIDIA. Alpamayo-R1: Bridging Reasoning and Action Prediction for Generalizable Autonomous Driving in the Long Tail. [arXiv:2511.00088](https://arxiv.org/abs/2511.00088), 2025.
12. L. Ankile et al. From Imitation to Refinement: Residual RL for Precise Assembly (ResiP). [arXiv:2407.16677](https://arxiv.org/abs/2407.16677), 2024.
13. VLSA / AEGIS: vision-language-action models with a plug-and-play safety constraint layer. [arXiv:2512.11891](https://arxiv.org/abs/2512.11891), 2025.
14. F. Jenelten, J. He, F. Farshidian, M. Hutter. DTC: Deep Tracking Control. *Science Robotics*, 2024. [arXiv:2309.15462](https://arxiv.org/abs/2309.15462)
15. A. Romero, E. Aljalbout, Y. Song, D. Scaramuzza. Actor-Critic Model Predictive Control. ICRA 2024; *T-RO* 2025. [arXiv:2306.09852](https://arxiv.org/abs/2306.09852)
16. R. Murai, E. Dexheimer, A. J. Davison. MASt3R-SLAM: Real-Time Dense SLAM with 3D Reconstruction Priors. CVPR 2025. [arXiv:2412.12392](https://arxiv.org/abs/2412.12392)
17. S. Zhang, O. So, K. Garg, C. Fan. GCBF+: A Neural Graph Control Barrier Function Framework for Distributed Safe Multi-Agent Control. *T-RO*, 2025. [arXiv:2401.14554](https://arxiv.org/abs/2401.14554)

</div>

<!--
Sources named on the hybrid-methods backup slide.
-->
