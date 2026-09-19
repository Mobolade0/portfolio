import type { Project } from "./types";
import { masterSource } from "./source";

// Provisional order, pending the user's project media and reports.
export const projects: Project[] = [
  {
    slug: "olympus-advanced", title: "Olympus Advanced", period: "November 2025 to July 2026",
    role: "Vice Team Captain and Mechanical Subteam Lead",
    summary: "A Mars rover developed with Team MarshGazers for the UKSEDS and Airbus Olympus Rover Trials Advanced Stream.",
    contributions: ["Led the mechanical subteam through concept selection, engineering justification and prototyping.", "Led mobility and sampling architecture development, with CAD and CAM in Autodesk Fusion 360.", "Presented build plans, risks and engineering trade-offs to supervisors and workshop stakeholders."],
    decisions: ["Selected a four-wheel skid-steer mobility architecture.", "Adapted the bucket drum collection principle used in NASA RASSOR concepts to the team's manufacturing resources and rover constraints."],
    teamOutcomes: ["Preliminary Design Report: 73/100, Grade A.", "Won Best CDR at the final competition."],
    evidenceLimits: ["Further final-build, test and competition evidence awaits the project reports and media archive."],
    tags: ["Mechanical design", "CAD / CAM", "Leadership"], media: [], source: masterSource,
  },
  {
    slug: "dr-hex", title: "DR-Hex", period: "March 2025 to June 2025",
    role: "Design and Mechanical Lead and Main IBM Liaison",
    summary: "A six-legged disaster-response robot developed by a four-person UCL team in partnership with IBM.",
    contributions: ["Led final CAD, mechanical configuration, assembly and major chassis decisions.", "Developed compliant legs through material and infill experiments, and engineered and tuned a tripod gait.", "Collaborated on SLAM and thermal detection integration and testing.", "Delivered weekly stakeholder updates and presented the final system to IBM's Worldwide Academic Ambassador Community."],
    decisions: ["Adapted an RHex-inspired architecture to the project constraints.", "Combined printed parts and PVC reinforcement to balance compliance with structural support."],
    teamOutcomes: ["Built and demonstrated an integrated robotic platform combining locomotion, sensing and a voice-based triage concept."],
    evidenceLimits: ["watsonx.ai and watsonx.data integration was at a surface level; no quantified field-performance claim is made."],
    tags: ["Robotics", "Prototyping", "Systems integration"], media: [], source: masterSource,
  },
  {
    slug: "olympus-basic", title: "Olympus Basic", period: "November 2024 to July 2025",
    role: "Student Competitor and Mechanical Contributor",
    summary: "A teleoperated tracked rover built with Team MarshGazers for the UKSEDS and RAL Space Olympus Rover Trials Basic Stream.",
    contributions: ["Designed and built the tracked mobility platform and supported drive-system integration.", "Integrated a two-degree-of-freedom manipulator and Arduino-based Wi-Fi control.", "Developed an HTML and JavaScript operator interface and QR detection using Nicla Vision, MicroPython and OpenMV."],
    decisions: ["Used expert design-review feedback to refine the system and engineering decisions."],
    teamOutcomes: ["Second place nationally.", "Best Automation Award and Best Outreach Award."],
    evidenceLimits: [], tags: ["Mechatronics", "Computer vision", "Teleoperation"], media: [], source: masterSource,
  },
  {
    slug: "tree-climbing-robot", title: "Tree Climbing Robot", period: "April 2024 to June 2024",
    role: "Design and Mechatronics Lead",
    summary: "A team prototype intended to climb a tree, deploy a canopy sensor and return to the ground.",
    contributions: ["Developed alternating upper and lower grippers with a lead-screw climbing mechanism.", "Led rapid prototyping and troubleshooting, including changes to guide-rod support, centre of mass and gripper actuation."],
    decisions: ["Moved from a four-finger servo concept toward a lighter compliant PLA gripper.", "Rejected acrylic and plywood finger concepts because of their mass and behaviour."],
    teamOutcomes: ["The compliant gripper adapted to and held the trunk in a working demonstration.", "Ascent was slower than intended; the overall demonstration was a partial success."],
    evidenceLimits: ["A complete climb, sensor deployment and return is not claimed."],
    tags: ["Compliant mechanisms", "Mechanical design", "Iteration"], media: [], source: masterSource,
  },
];
export function getProject(slug: string) { return projects.find(project => project.slug === slug); }
