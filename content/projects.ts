import type { Project } from "./types";
import { projectMedia } from "./project-media";
import { masterSource } from "./source";

// Provisional order, pending the user's project media and reports.
export const projects: Project[] = [
  {
    slug: "exoskeleton", title: "Assistive Exoskeleton", period: "October 2025 to June 2026",
    role: "",
    summary: "A wearable exoskeleton exploring twisted string actuation to assist sit-to-stand movement and improve mobility for older adults.",
    contributions: [], decisions: [], teamOutcomes: [], evidenceLimits: [],
    tags: ["Wearable robotics", "Mechanical design", "Prototyping"], media: projectMedia["exoskeleton"], source: masterSource,
  },
  {
    slug: "olympus-advanced", title: "Olympus Advanced", period: "November 2025 to July 2026",
    role: "Vice Team Captain and Mechanical Subteam Lead",
    summary: "A primarily autonomous Mars rover developed with Team MarshGazers for the UKSEDS and Airbus Olympus Rover Trials Advanced Stream, designed to collect planetary samples.",
    contributions: ["Led the mechanical subteam through concept selection, engineering justification and prototyping.", "Led mobility and sampling architecture development, with CAD and CAM in Autodesk Fusion 360.", "Presented build plans, risks and engineering trade-offs to supervisors and workshop stakeholders."],
    decisions: ["Selected a four-wheel skid-steer mobility architecture.", "Adapted the bucket drum collection principle used in NASA RASSOR concepts to the team's manufacturing resources and rover constraints."],
    teamOutcomes: ["Best Critical Design Review."],
    evidenceLimits: ["Further final-build, test and competition evidence awaits the project reports and media archive."],
    tags: ["Mechanical design", "CAD / CAM", "Leadership"], media: projectMedia["olympus-advanced"], source: masterSource,
  },
  {
    slug: "dr-hex", title: "DR-Hex", period: "March 2025 to June 2025",
    role: "Design and Mechanical Lead and Main IBM Liaison",
    summary: "A six-legged disaster-response robot developed in partnership with IBM, exploring how robotics could help identify and triage victims and support rescue efforts.",
    contributions: ["Led final CAD, mechanical configuration, assembly and major chassis decisions.", "Developed compliant legs through material and infill experiments, and engineered and tuned a tripod gait.", "Collaborated on SLAM and thermal detection integration and testing.", "Delivered weekly stakeholder updates and presented the final system to IBM's Worldwide Academic Ambassador Community."],
    decisions: ["Adapted an RHex-inspired architecture to the project constraints.", "Combined printed parts and PVC reinforcement to balance compliance with structural support."],
    teamOutcomes: ["Built and demonstrated an integrated robotic platform combining locomotion, sensing and a voice-based triage concept."],
    evidenceLimits: ["watsonx.ai and watsonx.data integration was at a surface level; no quantified field-performance claim is made."],
    tags: ["Robotics", "Prototyping", "Systems integration"], media: projectMedia["dr-hex"], source: masterSource,
  },
  {
    slug: "olympus-basic", title: "Olympus Basic", period: "November 2024 to July 2025",
    role: "Student Competitor and Mechanical Contributor",
    summary: "A teleoperated tracked rover built with Team MarshGazers for image collection in the UKSEDS and RAL Space Olympus Rover Trials Basic Stream.",
    contributions: ["Designed and built the tracked mobility platform and supported drive-system integration.", "Integrated a two-degree-of-freedom manipulator and Arduino-based Wi-Fi control.", "Developed an HTML and JavaScript operator interface and QR detection using Nicla Vision, MicroPython and OpenMV."],
    decisions: ["Used expert design-review feedback to refine the system and engineering decisions."],
    teamOutcomes: ["Second place nationally.", "Best Automation Award and Best Outreach Award."],
    evidenceLimits: [], tags: ["Mechatronics", "Computer vision", "Teleoperation"], media: projectMedia["olympus-basic"], source: masterSource,
  },
  {
    slug: "tree-climbing-robot", title: "Tree Climbing Robot", period: "April 2024 to June 2024",
    role: "Design and Mechatronics Lead",
    summary: "A robot designed to climb a tree, deploy a canopy sensor and return to the ground for a final-term challenge.",
    contributions: ["Developed alternating upper and lower grippers with a lead-screw climbing mechanism.", "Led rapid prototyping and troubleshooting, including changes to guide-rod support, centre of mass and gripper actuation."],
    decisions: ["Moved from a four-finger servo concept toward a lighter compliant PLA gripper.", "Rejected acrylic and plywood finger concepts because of their mass and behaviour."],
    teamOutcomes: ["The compliant gripper adapted to and held the trunk in a working demonstration.", "Ascent was slower than intended; the overall demonstration was a partial success."],
    evidenceLimits: ["A complete climb, sensor deployment and return is not claimed."],
    tags: ["Compliant mechanisms", "Mechanical design", "Iteration"], media: projectMedia["tree-climbing-robot"], source: masterSource,
  },
];
export function getProject(slug: string) { return projects.find(project => project.slug === slug); }

