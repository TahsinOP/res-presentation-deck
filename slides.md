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
(0:20) Thank you for the time. I'll give a quick overview of what I've worked on, then a few projects grouped by area, then the one I'm most invested in, cooperative transport with two robots using only onboard sensing, and end with the questions these projects left me with. About thirteen minutes; please stop me anywhere.
-->

---
layout: default
kicker: Background
title: About me
clicks: 4
---

<AboutTimeline />

<!--
(0:25, one click per step) Mechanical engineering at NIT Karnataka with a minor in electronics. In my final year I wrote a review on soft autonomous mobile manipulators with Prof. Mervin Joe Thomas, published in Industrial Robot this year. Then the e-Yantra summer internship at IIT Bombay on visual SLAM, and since August 2025 I've been at the ERTS Lab: competition themes, remote labs, mentoring interns, and since February a research project in cooperative transport.
-->

---
layout: default
kicker: Overview
title: What I have worked on
---

<WorkMap />

<!--
(0:35) The areas I've worked in, and the systems behind each.
Perception on a Raspberry Pi camera car and on wrist cameras; SLAM handheld and on a quadrotor with a 3D LiDAR; estimation and control on two mobile manipulators and a field vehicle; navigation on a campus shuttle, that vehicle and a simulated quadruped; learning on SO-101 arms and a UR5; and at e-Yantra, a remote lab and a car kit for student teams. Some of these I built myself and some I mentored; I'll say which on each slide.
Plan for today: two quick slides on my role at e-Yantra and earlier projects, then one thread, perception and SLAM, then learning, then cooperative transport where the two meet, and the questions they left me with.
-->

---
layout: default
kicker: e-Yantra Robotics Competition 2025–26 · paper in preparation
title: Remote labs for robotics
---

<div class="grid grid-cols-[0.9fr_1.4fr] gap-6 items-start">
<div>

- Krishi CoBot theme: a UR5 and a mobile robot in a mock greenhouse
- Teams develop in simulation, then run on the real robots over the internet
- Paper in preparation on scalable, low-cost remote labs

</div>
<div>

<div class="grid grid-cols-[1.6fr_1fr] gap-3 items-start">
<Pic src="img/remote-labs.png" height="9.5rem" fit="contain" />
<Vid src="videos/krishi.mp4" caption="Krishi CoBot arena" height="9.5rem" fill />
</div>

</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-4">
  <StatCard value="649" label="teams" />
  <StatCard value="2436" label="participants" />
  <StatCard value="475" unit="h" label="of remote hardware access" />
</div>

<!--
(0:35) My main role at the ERTS Lab: building national competitions and the remote labs behind them. The problem: most students learning robotics never run code on a real robot. For the Krishi CoBot theme I developed, a UR5 and a mobile robot work in a mock greenhouse; teams build in simulation, then book time on the real setup over the internet. 649 teams, 2436 participants, 475 hours of remote hardware access. We're writing a paper on making such labs scalable and low-cost.
Only if time: I also mentor eYSIP interns, ran faculty development programmes on embedded systems for about 80 professors, and a ROS workshop for the Women in Robotics initiative.
-->

---
layout: default
kicker: Overview
title: Earlier projects
---

<div class="grid grid-cols-3 gap-6 items-start">
<div>

<Vid src="videos/nitk.mp4" caption="Autonomous run (filmed by the CSD team) · 3×" height="11rem" fill />

**Campus shuttle** · NITK, 2025

- Guided the software side: sensor suite, Autoware on ROS 2
- LIO-SAM campus map, point-to-point runs

</div>
<div>

<Vid src="videos/arms.mp4" caption="Vicon, driving, then Nav2 · 2×" height="11rem" fill />

**Ackermann field vehicle** · ARMS Lab, IIT Bombay, 2024

- Built from motor control up to Nav2
- IMU + Vicon Kalman filter, AMCL, pure pursuit

</div>
<div>

<Vid src="videos/quadruped.mp4" caption="MuJoCo (left), RViz (right) · 2×" height="11rem" fill />

**Quadruped in MuJoCo + ROS 2** · personal, 2025

- PD control, leg IK, trot gait
- Spline waypoints from RViz

</div>
</div>

<!--
(0:30) Three earlier projects, quickly. At NITK I guided the software side of an autonomous campus shuttle on an electric chassis: chose the sensors, set up Autoware on ROS 2, and LIO-SAM to map the campus; the hardware and the runs you see were done by the CSD team. At the ARMS Lab at IIT Bombay with Prof. Arpita Sinha, I built a four-wheel-drive Ackermann vehicle from motor control up to Nav2, with an IMU and Vicon Kalman filter for odometry. And a simulated Unitree B2 quadruped in MuJoCo bridged to ROS 2: leg IK, a trot gait and waypoint navigation.
That's the breadth. Now one thread through the rest of the work: perception first.
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
The part I want to highlight: the maps drifted, and the cause was not the algorithm. It was a LiDAR–IMU extrinsic calibration error, made worse by thermal throttling on the Orin Nano. The estimator had no way to know its own model was wrong. I'll come back to that.
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
left: { title: "Typical setups in the literature", items: ["Motion capture for robot and payload pose", "Force/torque sensors at the grasp", "Large, expensive robot platforms", "A shared map or central computer"] }
right: { title: "This project", items: ["Wrist cameras only", "No force/torque sensing", "Low-cost robots, built in-house", "Each robot computes onboard"] }
---

<!--
(0:35) Why: most cooperative transport demonstrations rely on motion capture, force/torque sensing at the grasp and large, expensive platforms. The question is whether cooperation survives with only onboard sensing, the cameras on the robots' wrists, on low-cost robots, each computing for itself.
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

- The robots are coupled only through their relative orientation
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
Controller: one QP over both bases and both arms. Move the payload as planned, keep the two robots' predictions of the payload motion consistent, stay near a preferred posture. The coupling needs only the relative orientation, which is exactly what the grasp chain gives without drift. It's a soft cost, so the QP is always feasible, and its weight drops as the orientation uncertainty grows: rho = rho_0 / (1 + kappa tr Sigma_phi), with kappa set so the weight halves at 5 degrees.
If he wants depth: each piece was derived and checked numerically, e.g. the closed-chain relation against constructed geometry, and why the covariance floor must come after the update (backup slides).
OSQP solve time if asked: median 380 µs measured on a workstation, not yet on the Orin.
Notice the estimator runs at a fixed 50 Hz from 30 Hz detections, and the gate decides which detections to trust. That is a very crude answer to a question I care about, which I'll come back to.
-->

---
layout: steps
bg: dots
kicker: Cooperative transport
title: Current work and next steps
steps:
  - { icon: "lucide:target", title: "Validation", desc: "Against motion-capture ground truth, used only for evaluation" }
  - { icon: "lucide:scan", title: "Payload pickup", desc: "Locating and grasping the payload with ICP" }
  - { icon: "lucide:boxes", title: "A testbed", desc: "Low-cost platform for other cooperative tasks, including learning-based methods" }
---

<!--
(0:30) The full system runs on the two robots and the transport works; quantitative validation against motion capture is in progress, with mocap used only as ground truth for evaluation, never in the loop. In parallel: autonomous payload pickup, using ICP to locate it. And the platform itself is a cheap testbed for other cooperative tasks, including learning-based methods.
-->

---
layout: statement
bg: grain
kicker: Research direction
title: Reliable robots from <em>known structure</em> plus learning for the rest.
---

<!--
(0:20) One line through everything I've shown: I want to make robots reliable in the real world by combining structure we understand (geometry, physics, estimation) with learning for what we can't model. The transport project is the structure side; the imitation learning projects are the learning side. I'd like to work where they meet.
Be precise if he picks up on "hybrid": I haven't built a hybrid system yet. The transport platform is where I'd start, for example a learned residual on top of the QP.
-->

---
layout: default
kicker: Research direction
title: Where the field is, as I understand it
---

<div class="grid grid-cols-2 gap-10 mt-2">
<div>

**Learning-first**

- RL for legged locomotion
- Vision-language-action models for manipulation
- Strong results, but data-hungry and hard to debug

</div>
<div>

**Model-based + learning**

- Optimiser plans, RL policy tracks <span class="cite">DTC, Sci. Robot. 2024</span>
- MPC as a layer of an RL policy <span class="cite">Actor-Critic MPC, T-RO 2025</span>
- Learned priors, classical SLAM back end <span class="cite">MASt3R-SLAM, CVPR 2025</span>

</div>
</div>

<div v-click class="mt-8">
<Callout icon="lucide:search">Most hybrid results I've read are single-robot, on well-calibrated sensors at fixed rates.</Callout>
</div>

<!--
(0:35) A rough picture from my reading, not a survey. Learning-first: RL for legged locomotion, vision-language-action models for manipulation; impressive, but data-hungry, and as I saw in the imitation work, hard to debug. Many strong results combine the two: in DTC a trajectory optimiser plans footholds and an RL policy tracks them; in Actor-Critic MPC a differentiable MPC is the last layer of the policy for agile flight; MASt3R-SLAM uses a learned 3D prior with a classical back end.
(click) What I notice, carefully worded: most of these are one robot, with sensors assumed calibrated and running at fixed rates. That's where my three questions come from.
Sources if asked: Jenelten et al., Science Robotics 2024; Romero et al., ICRA 2024 and T-RO 2025 (UZH RPG); Murai et al., CVPR 2025. More in the backup slide.
-->

---
layout: default
kicker: Research direction
title: Questions my projects left me with
---

<div class="grid grid-cols-3 gap-5 mt-2 items-stretch">

<div class="q">
<div class="q-n">01</div>
<div class="q-t">What should a robot sense and compute, and when?</div>
<div class="q-k">My work</div>
<div class="q-b">Transport filter at a fixed 30 / 50 Hz, whether the payload is still or moving; a χ² gate is its only choice of what to trust.</div>
<div class="q-k">Field</div>
<div class="q-b">Event cameras sense on change; a few VIO systems adapt their compute. Most estimators still run at fixed rates.</div>
</div>

<div class="q">
<div class="q-n">02</div>
<div class="q-t">How can an estimator notice bad calibration?</div>
<div class="q-k">My work</div>
<div class="q-b">Drone maps drifted from a LiDAR–IMU extrinsic error. A camera-mount bias left the transport filter <strong>76×</strong> overconfident (simulation).</div>
<div class="q-k">Field</div>
<div class="q-b">Online calibration exists, but extrinsics become unobservable under common motions, so errors can pass silently.</div>
</div>

<div class="q">
<div class="q-n">03</div>
<div class="q-t">How can known structure go into learned models?</div>
<div class="q-k">My work</div>
<div class="q-b">Transport coordinates from grasp geometry alone; the learned policies handled contact but failed in ways we couldn't trace.</div>
<div class="q-k">Field</div>
<div class="q-b">Learned cooperative transport is mostly end-to-end RL; model-based methods assume a known grasp. Few combine the two.</div>
</div>

</div>

<!--
(1:15) Three questions, each from a problem I actually hit, and what I found when I read about it. I don't have answers; they're what I'd like to study.
Literature behind the "Field" lines, if asked:
- Adaptive compute in VIO: Li and Mourikis, IROS 2012 (features adapted to available compute); resource-aware parameter adaptation (2021); learned visual-modality selection for deep VIO (2022, turns the camera branch off when IMU suffices). Event cameras: his own area.
- Calibration observability: degenerate motions make online camera–IMU calibration unobservable (Yang et al., online self-calibration for VINS); for LiDAR–IMU, near pure translation makes the extrinsic unobservable (LIC-Fusion 2.0, Zuo et al. 2020). Normal drone flight is close to that.
- Learned cooperative transport: decentralised RL for quadruped manipulators (decPLM, 2025), multi-humanoid transport (CooHOI, NeurIPS 2024), DeReCo (2026); model-based force-sensorless methods assume known grasps (Verginis et al., 2017).
1. In the transport project the camera gives 30 Hz detections, the filter runs at a fixed 50 Hz, and the only decision about what to trust is a chi-squared gate. So: what is worth sensing and processing, and when, with limited onboard compute?
2. On the drone the maps drifted because the LiDAR–IMU extrinsic was wrong, and the estimator had no way to know. In the transport filter, a fixed camera-mount bias makes it badly overconfident in simulation; the covariance floor is a patch, not a solution. So: how can an estimator notice its own calibration is wrong?
3. The transport works because the physical structure does the coordination; the learned policies handled contact I'd never model, but failed in ways I couldn't diagnose. So: how can that structure be built into learned models, both policies and models of how the world evolves?
If asked for a first step, keep it small and say "for example": compare fixed-rate against triggered updates in the transport estimator; check whether a consistency test on the drone data would have flagged the extrinsic error; or learn a residual on top of the transport controller. Don't promise more than that.
-->

---
layout: vs
kicker: Research direction
title: Where these meet your group's work
label: →
left: { title: "My questions", items: ["What to sense and compute, and when", "Estimators that notice calibration errors", "Known structure inside learned models"] }
right: { title: "Directions in your group", items: ["Event-driven sensing: gather information when and where it is useful", "Inertial odometry with geometric structure (Lie Events, EqNIO)", "World models: how the world evolves, and when to act, with limited resources"] }
---

<!--
(0:45) This is why your group interests me. The first question is close to event-driven sensing: gathering information when it is useful rather than at fixed rates. The second is close to learned inertial odometry with Lie-group and equivariant structure, and I'd be curious how that behaves under the kind of calibration error I saw on the drone. The third connects to world models that help a robot decide when to act with limited resources.
To be honest about where I stand: I haven't worked with event cameras or learned inertial odometry myself yet; that's what I'd like to learn. I'm open on the platform, drones, mobile manipulators or multi-robot systems, and would like to shape the specific project with you.
Then move to questions for him.

QUESTIONS TO ASK HIM (pick two or three):
- What would a first student in your group work on?
- For the August 2027 PhD intake (NUS deadline 15 January), should I name you as proposed supervisor, and is there anything you'd like me to strengthen before then?
- How do you see event-based sensing connecting to manipulation or multi-robot systems?
- What hardware will the group have at the start?
-->

---
layout: end
bg: mesh
title: Thank you
subtitle: Questions?
---

<!--
(0:10) Thank you. Leave this up during questions.

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
kicker: Research outputs
title: Publication and paper in preparation
aside: backup
---

<div class="grid grid-cols-2 gap-10 items-start">
<div>

**Review · *Industrial Robot*, 2026** · first author

- Soft autonomous mobile manipulators in agriculture, with Prof. Mervin Joe Thomas (NITK)
- Soft grippers, mobile bases and the integrated system; integration is the open problem

<Pic src="img/samm-field-robots.jpg" caption="Agricultural mobile manipulators covered in the review" height="9rem" fit="contain" />

</div>
<div>

**Remote labs for robotics** · paper in preparation

- Krishi CoBot (eYRC 2025–26): a UR5 and a mobile robot, run remotely from simulation code
- 649 teams, 2436 participants, 475 h of remote hardware access

<div class="grid grid-cols-[1.4fr_1fr] gap-3">
<Pic src="img/remote-labs.png" height="9rem" fit="contain" />
<Vid src="videos/krishi.mp4" height="9rem" fill />
</div>

</div>
</div>

<!--
(0:50) Two research outputs beyond the transport work.

The review, published in Industrial Robot this year with Prof. Mervin Joe Thomas at NITK: soft autonomous mobile manipulators for harvesting and crop monitoring. It covers soft grippers across actuator families, localisation and planning for mobile bases in unstructured fields, and the integrated system. The main finding is that each part has matured, but integrating them is the open problem; the design-space analysis shows where gripper compliance relaxes the precision needed from the base and arm.

Remote labs: for the Krishi CoBot theme I developed, a UR5 and a mobile robot work in a mock greenhouse; teams build in simulation, then run on the real setup over the internet. 649 teams, 2436 participants, 475 hours of remote hardware access. We're writing a paper on making such labs scalable and low-cost.

Only if time. Also at e-Yantra: mentored eYSIP projects, faculty development programmes on embedded systems for about 80 professors, and a ROS workshop for the Women in Robotics initiative.
-->

---
layout: default
kicker: Backup
title: Hybrid methods in recent work
aside: backup
---

<div class="grid grid-cols-2 gap-x-8 gap-y-5 mt-2">
<div>

**Legged locomotion**

DTC (Jenelten et al., *Science Robotics* 2024): trajectory optimisation plans footholds, an RL policy tracks them.

</div>
<div>

**Agile flight**

Actor-Critic MPC (Romero et al., ICRA 2024; *T-RO* 2025): a differentiable MPC as the actor's last layer.

</div>
<div>

**Manipulation**

ResiP (Ankile et al., 2024): RL residual on a frozen diffusion BC policy. AEGIS (arXiv 2025): CBF safety layer on VLAs.

</div>
<div>

**Estimation and multi-robot**

MASt3R-SLAM (CVPR 2025): learned prior, classical optimisation. GCBF+ (*T-RO* 2025): learned graph CBF for multi-robot safety.

</div>
</div>

<!--
Only if asked for examples. Actor-Critic MPC is from the UZH Robotics and Perception Group. EqNIO and Lie Events are his own; name them, don't explain them to him.
-->
