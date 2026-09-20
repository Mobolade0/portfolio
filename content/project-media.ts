import type { Media } from "./types";

// User-supplied media reviewed on 2026-09-20. First image is the homepage cover.
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
  ]
};
