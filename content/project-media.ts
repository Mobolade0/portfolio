import type { Media } from "./types";

// User-supplied media. First image is the homepage cover.
export const projectMedia: Record<string, Media[]> = {
  "olympus-advanced": [
    {
      "kind": "image",
      "src": "/media/olympus-advanced/rover-sand.webp",
      "alt": "Olympus Advanced rover on the sandy competition course.",
      "caption": "Final rover on the competition course.",
      "width": 1600,
      "height": 1066
    },
    {
      "kind": "image",
      "src": "/media/olympus-advanced/rover-bench.webp",
      "alt": "Red and black rover on a support stand, showing its wheels, suspension and LiDAR.",
      "caption": "Final build: chassis, mobility and sensing.",
      "width": 1600,
      "height": 1066
    },
    {
      "kind": "image",
      "src": "/media/olympus-advanced/rover-terrain.webp",
      "alt": "Olympus Advanced rover in sand beside rocks.",
      "caption": "Rover on the sand course.",
      "width": 1600,
      "height": 1066
    },
    {
      "kind": "image",
      "src": "/media/olympus-advanced/rover-adjustment.webp",
      "alt": "Team members working on a rover wheel while the chassis rests on a stand.",
      "caption": "Hands-on adjustment of the rover.",
      "width": 1600,
      "height": 1066
    },
    {
      "kind": "image",
      "src": "/media/olympus-advanced/rover-preparation.webp",
      "alt": "Team members preparing the rover on a workbench.",
      "caption": "Team preparation and hardware checks.",
      "width": 1600,
      "height": 1066
    },
    {
      "kind": "image",
      "src": "/media/olympus-advanced/team.webp",
      "alt": "Team MarshGazers posing with the rover at the competition venue.",
      "caption": "Team MarshGazers with Olympus Advanced.",
      "width": 1600,
      "height": 1066
    }
  ],
  "dr-hex": [
    {
      "kind": "image",
      "src": "/media/dr-hex/hexapod-isometric.webp",
      "alt": "Blue DR-Hex robot with curved white legs, front cameras and a top-mounted LiDAR.",
      "caption": "DR-Hex: the assembled team prototype.",
      "width": 1600,
      "height": 1066
    },
    {
      "kind": "image",
      "src": "/media/dr-hex/hexapod-side.webp",
      "alt": "Side view of DR-Hex showing three curved legs and the chassis.",
      "caption": "Side profile showing the compliant leg architecture.",
      "width": 1600,
      "height": 1066
    },
    {
      "kind": "image",
      "src": "/media/dr-hex/cad-views.webp",
      "alt": "Four CAD views of DR-Hex: top, isometric, front and side.",
      "caption": "Mechanical design in CAD.",
      "width": 1600,
      "height": 767
    },
    {
      "kind": "image",
      "src": "/media/dr-hex/test-scene.webp",
      "alt": "Overhead photograph of DR-Hex facing a seated person during a test.",
      "caption": "Physical test scene.",
      "width": 1526,
      "height": 1600,
      "group": "slam-comparison"
    },
    {
      "kind": "image",
      "src": "/media/dr-hex/slam-map.webp",
      "alt": "SLAM visualisation showing the robot, mapped surroundings and an orange highlighted region.",
      "caption": "Corresponding SLAM visualisation.",
      "width": 1206,
      "height": 1265,
      "group": "slam-comparison"
    },
    {
      "kind": "image",
      "src": "/media/dr-hex/rhex-reference.webp",
      "alt": "RHex robot traversing rocky ground using curved legs.",
      "caption": "Design inspiration: Boston Dynamics RHex, a separate robot used as a reference.",
      "width": 686,
      "height": 386
    }
  ],
  "tree-climbing-robot": [
    {
      "kind": "image",
      "src": "/media/tree-climbing-robot/assembled-prototype.webp",
      "alt": "Assembled tree-climbing robot with two compliant grippers, vertical rods and electronics.",
      "caption": "Assembled prototype with the later compliant grippers.",
      "width": 1350,
      "height": 1800
    },
    {
      "kind": "image",
      "src": "/media/tree-climbing-robot/early-concept.webp",
      "alt": "Annotated sketch of a two-gripper tree-climbing robot.",
      "caption": "Initial concept: alternating upper and lower grippers.",
      "width": 1218,
      "height": 1800
    },
    {
      "kind": "image",
      "src": "/media/tree-climbing-robot/climbing-sequence.webp",
      "alt": "Six sketches illustrating the proposed alternating grip and climb sequence.",
      "caption": "Proposed climbing sequence, from gripping to advancing the next gripper.",
      "width": 1059,
      "height": 1800
    },
    {
      "kind": "image",
      "src": "/media/tree-climbing-robot/gripper-sketch.webp",
      "alt": "Annotated sketch of the early geared rigid gripper.",
      "caption": "Early gripper concept: geared actuation and rigid fingers.",
      "width": 962,
      "height": 859
    },
    {
      "kind": "image",
      "src": "/media/tree-climbing-robot/rigid-gripper-drawing.webp",
      "alt": "Dimensioned CAD drawing of the earlier rigid gripper.",
      "caption": "Earlier iteration: rigid gripper CAD.",
      "width": 1906,
      "height": 1348,
      "documentSrc": "/media/tree-climbing-robot/rigid-gripper-drawing.pdf"
    },
    {
      "kind": "image",
      "src": "/media/tree-climbing-robot/rigid-prototype.webp",
      "alt": "Red acrylic rigid gripper prototype with geared actuation.",
      "caption": "Earlier iteration: the manufactured rigid gripper prototype.",
      "width": 1600,
      "height": 1200
    },
    {
      "kind": "image",
      "src": "/media/tree-climbing-robot/compliant-prototype.webp",
      "alt": "White compliant gripper with strings, servo and Arduino on a workbench.",
      "caption": "Later iteration: lightweight compliant fingers actuated by strings.",
      "width": 1350,
      "height": 1800
    },
    {
      "kind": "image",
      "src": "/media/tree-climbing-robot/assembly-drawing.webp",
      "alt": "Dimensioned assembly drawing showing the robot with compliant grippers.",
      "caption": "Later assembly design with compliant upper and lower grippers.",
      "width": 1906,
      "height": 1348,
      "documentSrc": "/media/tree-climbing-robot/assembly-drawing.pdf"
    },
    {
      "kind": "image",
      "src": "/media/tree-climbing-robot/lower-body-drawing.webp",
      "alt": "CAD views of the lower body, compliant gripper and motor arrangement.",
      "caption": "Lower-body design and motor arrangement.",
      "width": 1906,
      "height": 1348,
      "documentSrc": "/media/tree-climbing-robot/lower-body-drawing.pdf"
    },
    {
      "kind": "image",
      "src": "/media/tree-climbing-robot/upper-body-drawing.webp",
      "alt": "CAD views of the upper body with compliant fingers and ultrasonic sensors.",
      "caption": "Upper-body design and ultrasonic sensor placement.",
      "width": 1906,
      "height": 1348,
      "documentSrc": "/media/tree-climbing-robot/upper-body-drawing.pdf"
    }
  ],
  "olympus-basic": [
    {
      "kind": "image",
      "src": "/media/olympus-basic/rover-awards.webp",
      "alt": "Tracked MarshGazers rover displayed beside competition awards.",
      "caption": "The Basic Stream rover with its competition awards.",
      "width": 1600,
      "height": 1200
    },
    {
      "kind": "image",
      "src": "/media/olympus-basic/rover-ral-space.webp",
      "alt": "Tracked rover supported on an orange stand in a RAL Space laboratory.",
      "caption": "Rover hardware at RAL Space.",
      "width": 1600,
      "height": 1066
    },
    {
      "kind": "image",
      "src": "/media/olympus-basic/team-ral-space.webp",
      "alt": "Three MarshGazers team members standing with the rover in a RAL Space laboratory.",
      "caption": "Team members with the rover at RAL Space.",
      "width": 1600,
      "height": 1066
    },
    {
      "kind": "image",
      "src": "/media/olympus-basic/rover-preparation.webp",
      "alt": "Team members working on the tracked rover outdoors.",
      "caption": "Hands-on rover preparation and adjustments.",
      "width": 1600,
      "height": 1091
    },
    {
      "kind": "image",
      "src": "/media/olympus-basic/outreach.webp",
      "alt": "MarshGazers members demonstrating the rover to visitors outdoors.",
      "caption": "Sharing the rover with visitors during outreach.",
      "width": 1600,
      "height": 1068
    },
    {
      "kind": "image",
      "src": "/media/olympus-basic/team-globe.webp",
      "alt": "Five MarshGazers team members standing beneath a large globe display.",
      "caption": "Team MarshGazers, Basic Stream.",
      "width": 1600,
      "height": 1068
    }
  ]
};
