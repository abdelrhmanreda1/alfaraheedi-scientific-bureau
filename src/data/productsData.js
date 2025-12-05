// GI Icons
import {
  GiNightSleep,
  GiBrain,
  GiHerbsBundle,
  GiHealing,
  GiLeafSwirl,
  GiFlowerPot,
  GiWaterDrop,
  GiEnergyArrow,
  GiElectric,
  GiHeartPlus,
  GiHeadbandKnot,
  GiSittingDog,
  GiBodyBalance,
  GiCycle,
  GiHealthNormal,
  GiBubbles,
  GiPineapple,
  GiChemicalDrop,
  GiStoneBlock,
  GiStonePile,
  GiWaterBolt,
  GiHotSpices,
  GiStomach,
  GiDrop,
  GiPlantRoots,
  GiPalmTree,
  GiMale,
  GiWaterPolo,
  GiKidneys,
  GiHealthIncrease,
  GiMedicines,
  GiRunningNinja,
  GiLightningDissipation,
  GiBee,
  GiMinerals,
  GiStrong,
  GiShield,
  GiRapidshareArrow,
  GiEyeTarget,
} from "react-icons/gi";

// FA Icons
import {
  FaRegSmile,
  FaRegClock,
  FaHeartbeat,
  FaBaby,
  FaLeaf,
  FaEye,
  FaUtensils,
  FaHandHoldingWater,
  FaListUl,
  FaCheckCircle,
  FaSmile,
  FaShower,
  FaTablets,
  FaSyringe,
  FaClock,
  FaBolt,
  FaRunning,
  FaBrain,
  FaDumbbell,
  FaExclamationTriangle,
  FaTint,
  FaBacteria,
} from "react-icons/fa";

// MD Icons
import { MdOutlineHealthAndSafety } from "react-icons/md";

export const productsData = [
  {
    id: 1,
    name: "Valerilano",
    type: "Sleep & Anti-Anxiety Tablets",
    department: "Internal Medicine",
    category: "Sleep & Anxiety",
    brand: "Pharmilano",
    image: "/p1.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Herbal sleep support formula containing Valerian & Passiflora extracts, designed to improve sleep quality, reduce anxiety, and enhance relaxation naturally.",

    fullDesc: {
      about: [
        {
          icon: <GiNightSleep className="text-[#0A506F]" size={26} />,
          title: "Improves Sleep Quality",
          text: "Helps users fall asleep faster, reduces nighttime awakenings, and increases overall sleep depth.",
        },
        {
          icon: <GiBrain className="text-[#0A506F]" size={26} />,
          title: "Natural Anxiolytic Effect",
          text: "Reduces nervous tension, anxiety, and stress without causing addiction or dependence.",
        },
        {
          icon: <GiHerbsBundle className="text-[#0A506F]" size={26} />,
          title: "Herbal Combination",
          text: "Contains Valerian, Passiflora, Chamomile, and other natural extracts that act synergistically.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Non-Habit Forming",
          text: "Safe for long-term use with no dependency or withdrawal symptoms.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#0A506F]" size={26} />
          ),
          title: "Clinically Trusted Formula",
          text: "Backed by scientific studies proving the effectiveness of Valerian extract on sleep disorders.",
        },
      ],

      composition: [
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={24} />,
          ingredient: "Valerian Dry Extract",
          amount: "100 mg",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={24} />,
          ingredient: "Passiflora Extract",
          amount: "50 mg",
        },
        {
          icon: <GiFlowerPot className="text-[#047857]" size={24} />,
          ingredient: "Chamomile Extract",
          amount: "30 mg",
        },
        {
          icon: <GiWaterDrop className="text-[#047857]" size={24} />,
          ingredient: "Lemon Balm Extract",
          amount: "20 mg",
        },
        {
          icon: <GiEnergyArrow className="text-[#047857]" size={24} />,
          ingredient: "Magnesium",
          amount: "40 mg",
        },
      ],

      mechanism: [
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "GABA Enhancement",
          text: "Valerian increases GABA levels in the brain, promoting calmness and reducing overstimulation.",
        },
        {
          icon: <GiBrain className="text-[#EF4444]" size={26} />,
          title: "CNS Relaxation",
          text: "Passiflora decreases central nervous system activity, helping the body transition to deep sleep.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={26} />,
          title: "Muscle Relaxation",
          text: "Chamomile helps relieve muscular tension, supporting a comfortable sleep state.",
        },
      ],

      indications: [
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={22} />,
          text: "Difficulty falling asleep (sleep onset insomnia).",
        },
        {
          icon: <FaRegClock className="text-[#0E7490]" size={22} />,
          text: "Interrupted sleep / light sleep.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Stress-related insomnia.",
        },
        {
          icon: <GiHeadbandKnot className="text-[#0E7490]" size={22} />,
          text: "Anxiety or nervous tension.",
        },
        {
          icon: <GiSittingDog className="text-[#0E7490]" size={22} />,
          text: "Emotional restlessness.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={22} />,
          text: "Adults: 1–2 tablets daily, preferably 30 minutes before bedtime.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={22} />,
          text: "Swallow tablets with water without chewing.",
        },
        {
          icon: <FaRegSmile className="text-[#9333EA]" size={22} />,
          text: "Safe for daily use. Recommended for at least 2 weeks for best results.",
        },
      ],

      precautions: [
        {
          icon: <FaEye className="text-[#F97316]" size={22} />,
          text: "Avoid driving or operating machinery after consumption.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={22} />,
          text: "Not recommended for children under 12.",
        },
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Avoid combining with strong sedatives or alcohol.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Consult a doctor during pregnancy or breastfeeding.",
        },
      ],

      sideEffects: [
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Mild morning drowsiness (rare).",
        },
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Mild stomach upset.",
        },
        {
          icon: <GiBrain className="text-[#DC2626]" size={22} />,
          text: "Headache if dosage is exceeded.",
        },
      ],

      storage: "Store below 25°C in a dry place away from direct sunlight.",
      packaging: "Blister pack of 30 tablets – Made in Italy.",
    },
  },
  {
    id: 2,
    name: "Lanolax",
    type: "Digestive Relief – Anti-Gas, Anti-Bloating & Gentle Laxative",
    department: "Internal Medicine",
    category: "Digestive Health",
    brand: "Pharmilano",
    image: "/p2.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Herbal digestive formula designed to relieve gas, bloating, indigestion, and mild constipation through a well-balanced natural blend that supports healthy bowel movement and gut comfort.",

    fullDesc: {
      about: [
        {
          icon: <GiStomach className="text-[#0A506F]" size={26} />,
          title: "Relieves Gas & Bloating",
          text: "Targets intestinal gas, helping reduce abdominal pressure, discomfort, and bloating.",
        },
        {
          icon: <GiHerbsBundle className="text-[#0A506F]" size={26} />,
          title: "Herbal Digestive Support",
          text: "Contains a specialized natural blend formulated to improve gut motility and relieve functional digestive issues.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Eases Indigestion",
          text: "Reduces symptoms such as heaviness, acidity, fullness, and post-meal discomfort.",
        },
        {
          icon: <GiEnergyArrow className="text-[#0A506F]" size={26} />,
          title: "Supports Bowel Movement",
          text: "Helps regulate stool movement gently without causing cramps or sudden urgency.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#0A506F]" size={26} />
          ),
          title: "Safe Natural Action",
          text: "Made from a clinically trusted herbal combination suitable for regular use.",
        },
      ],

      composition: [
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={24} />,
          ingredient: "Simethicone",
          amount: "80 mg",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={24} />,
          ingredient: "Fennel Extract",
          amount: "40 mg",
        },
        {
          icon: <GiFlowerPot className="text-[#047857]" size={24} />,
          ingredient: "Senna Extract",
          amount: "17.2 mg",
        },
        {
          icon: <GiWaterDrop className="text-[#047857]" size={24} />,
          ingredient: "Peppermint Oil",
          amount: "10 mg",
        },
        {
          icon: <GiEnergyArrow className="text-[#047857]" size={24} />,
          ingredient: "Ginger Extract",
          amount: "25 mg",
        },
      ],

      mechanism: [
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Anti-Gas Action",
          text: "Simethicone breaks down trapped gas bubbles in the intestine, relieving bloating and flatulence.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={26} />,
          title: "Digestive Motility Support",
          text: "Herbal extracts support gut movement, helping reduce indigestion, fullness, and intestinal heaviness.",
        },
        {
          icon: <GiHealing className="text-[#EF4444]" size={26} />,
          title: "Gentle Laxative Effect",
          text: "Senna provides a mild stimulant action on the colon, supporting smoother bowel movement.",
        },
      ],

      indications: [
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={22} />,
          text: "Gas, bloating, abdominal pressure.",
        },
        {
          icon: <FaRegClock className="text-[#0E7490]" size={22} />,
          text: "Indigestion, fullness, post-meal discomfort.",
        },
        {
          icon: <GiStomach className="text-[#0E7490]" size={22} />,
          text: "Functional gastrointestinal disorders.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Mild constipation or slow bowel movement.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={22} />,
          text: "Adults: 1–2 tablets per day after meals or as recommended by a physician.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={22} />,
          text: "Swallow tablets with water without chewing.",
        },
        {
          icon: <FaRegSmile className="text-[#9333EA]" size={22} />,
          text: "Suitable for regular use during episodes of digestive discomfort.",
        },
      ],

      precautions: [
        {
          icon: <FaEye className="text-[#F97316]" size={22} />,
          text: "Do not exceed recommended dose to avoid abdominal cramping.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={22} />,
          text: "Not recommended for children under 12 years.",
        },
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Use cautiously in patients with chronic GI diseases unless advised by a doctor.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Consult a physician during pregnancy or breastfeeding.",
        },
      ],

      sideEffects: [
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Mild abdominal discomfort (rare).",
        },
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Soft stool if dosage is exceeded.",
        },
        {
          icon: <GiBrain className="text-[#DC2626]" size={22} />,
          text: "Occasional nausea in sensitive individuals.",
        },
      ],

      storage:
        "Store below 25°C in a dry place away from moisture and direct sunlight.",

      packaging: "Box of 20 coated tablets – Made in Italy.",
    },
  },
  {
    id: 3,
    name: "Microlano",
    type: "Gastro-Resistant Butyric Acid Formula",
    department: "Internal Medicine",
    category: "GIT – IBS & Microbiome",
    brand: "Pharmilano",
    image: "/p3.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Triple-action formula combining Butyric Acid, FOS prebiotics, and Bifidobacterium probiotics for restoring gut balance, improving IBS symptoms, and enhancing bowel regularity.",

    fullDesc: {
      about: [
        {
          icon: <GiStomach className="text-[#0A506F]" size={26} />,
          title: "Targets the Colon Directly",
          text: "Gastro-resistant tablets ensure Butyric Acid reaches the colon intact for maximum therapeutic effect.",
        },
        {
          icon: <GiEnergyArrow className="text-[#0A506F]" size={26} />,
          title: "Triple-Action Synergy",
          text: "Combines prebiotics, probiotics, and postbiotics for full microbiome restoration.",
        },
        {
          icon: <FaBacteria className="text-[#0A506F]" size={26} />,
          title: "Restores Gut Flora",
          text: "Supports beneficial bacteria growth and suppresses harmful pathogens.",
        },
        {
          icon: <GiHealthNormal className="text-[#0A506F]" size={26} />,
          title: "Improves Digestive Function",
          text: "Enhances bowel regularity, reduces bloating, and supports intestinal healing.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#0A506F]" size={26} />
          ),
          title: "Clinically Supported Formula",
          text: "Backed by studies demonstrating reduced pain and better bowel movement frequency in IBS patients.",
        },
      ],

      composition: [
        {
          icon: <GiEnergyArrow className="text-[#047857]" size={24} />,
          ingredient: "Calcium Butyrate (delivers 500 mg Butyric Acid)",
          amount: "614 mg",
        },
        {
          icon: <FaLeaf className="text-[#047857]" size={24} />,
          ingredient: "Fructo-Oligosaccharides (FOS)",
          amount: "200 mg",
        },
        {
          icon: <FaBacteria className="text-[#047857]" size={24} />,
          ingredient: "Bifidobacterium",
          amount: "2.04 Billion CFU",
        },
      ],

      mechanism: [
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Colonocyte Nourishment",
          text: "Butyric Acid is the primary energy source for colon cells, improving regeneration and mucosal healing.",
        },
        {
          icon: <GiCycle className="text-[#EF4444]" size={26} />,
          title: "Anti-Inflammatory Action",
          text: "Reduces intestinal inflammation and supports epithelial integrity.",
        },
        {
          icon: <FaBacteria className="text-[#EF4444]" size={26} />,
          title: "Microbiome Restoration",
          text: "FOS + Bifidobacterium rebalance gut flora, inhibit pathogens, and improve digestion and immunity.",
        },
      ],

      indications: [
        {
          icon: <GiStomach className="text-[#0E7490]" size={22} />,
          text: "Irritable Bowel Syndrome (IBS).",
        },
        {
          icon: <FaRegClock className="text-[#0E7490]" size={22} />,
          text: "Abdominal pain and bloating.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Constipation and/or diarrhea.",
        },
        {
          icon: <FaCheckCircle className="text-[#0E7490]" size={22} />,
          text: "Post-antibiotic microbiota restoration.",
        },
      ],

      dosage: [
        {
          icon: <FaListUl className="text-[#9333EA]" size={22} />,
          text: "1–2 gastro-resistant tablets daily, with or without food.",
        },
        {
          icon: <FaRegClock className="text-[#9333EA]" size={22} />,
          text: "For best results, continue for at least 4–6 weeks.",
        },
      ],

      precautions: [
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Safe and well-tolerated — suitable for long-term use.",
        },
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Consult a doctor if symptoms persist or worsen.",
        },
      ],

      sideEffects: [
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Rare mild gas during first days (due to prebiotic activity).",
        },
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Very mild abdominal discomfort in sensitive patients.",
        },
      ],

      storage:
        "Store in a cool, dry place below 25°C, away from direct sunlight.",
      packaging: "Blister pack – Made in Italy.",
    },
  },
  {
    id: 4,
    name: "Riflussan Pro",
    type: "Digestive Support Chewable Tablets",
    department: "Gastroenterology",
    category: "Digestion & Acidity Relief",
    brand: "Pharmilano",
    image: "/p4.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Advanced digestive support formula combining enzymes, herbal extracts, and acid-neutralizing agents for fast relief from indigestion, acidity, and reflux.",

    fullDesc: {
      // --------------- ABOUT ---------------
      about: [
        {
          icon: <GiStomach className="text-[#0A506F]" size={26} />,
          title: "Supports Overall Digestion",
          text: "Combines natural enzymes and herbal extracts to improve digestion and ease discomfort.",
        },
        {
          icon: <GiHerbsBundle className="text-[#0A506F]" size={26} />,
          title: "Relieves Nausea & Bloating",
          text: "Ginger stimulates digestive enzymes and reduces nausea, vomiting, and bloating.",
        },
        {
          icon: <GiHerbsBundle className="text-[#0A506F]" size={26} />,
          title: "Soothing Herbal Blend",
          text: "Peppermint & Caraway regulate peristalsis, easing constipation, cramps, and abdominal pain.",
        },
        {
          icon: <GiBubbles className="text-[#0A506F]" size={26} />,
          title: "Fast Heartburn Relief",
          text: "Calcium & Magnesium neutralize stomach acid quickly and reduce acidity symptoms.",
        },
        {
          icon: <GiHealthNormal className="text-[#0A506F]" size={26} />,
          title: "Natural Enzyme Support",
          text: "Papaya, Bromelain & DigeZyme® enhance protein, fat & carb digestion effectively.",
        },
      ],

      // --------------- COMPOSITION ---------------
      composition: [
        {
          icon: <GiPineapple className="text-[#047857]" size={22} />,
          ingredient: "Papaya Extract",
          amount: "Rich in Papain enzyme",
        },
        {
          icon: <GiPineapple className="text-[#047857]" size={22} />,
          ingredient: "Bromelain",
          amount: "Protein-digesting enzyme",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={22} />,
          ingredient: "Peppermint",
          amount: "Natural antispasmodic",
        },
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={22} />,
          ingredient: "Caraway",
          amount: "Supports gastric secretion",
        },
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={22} />,
          ingredient: "Ginger",
          amount: "High gingerol content",
        },
        {
          icon: <GiChemicalDrop className="text-[#047857]" size={22} />,
          ingredient: "DigeZyme®",
          amount:
            "Multi-enzyme complex (Amylase, Protease, Lactase, Lipase, Cellulase)",
        },
        {
          icon: <GiStoneBlock className="text-[#047857]" size={22} />,
          ingredient: "Calcium Carbonate",
          amount: "Antacid — neutralizes acidity",
        },
        {
          icon: <GiStonePile className="text-[#047857]" size={22} />,
          ingredient: "Magnesium Hydroxide / Carbonate",
          amount: "Dual antacid & mineral support",
        },
        {
          icon: <GiWaterBolt className="text-[#047857]" size={22} />,
          ingredient: "Sodium Alginate",
          amount: "Forms anti-reflux protective gel",
        },
      ],

      // --------------- MECHANISM ---------------
      mechanism: [
        {
          icon: <GiBodyBalance className="text-[#EF4444]" size={24} />,
          title: "Enzyme-Based Digestion",
          text: "Papain, Bromelain & DigeZyme® break down proteins, fats & carbs to improve digestion.",
        },
        {
          icon: <GiChemicalDrop className="text-[#EF4444]" size={24} />,
          title: "Acid Neutralization",
          text: "Calcium & Magnesium reduce stomach acidity and soothe heartburn rapidly.",
        },
        {
          icon: <GiWaterBolt className="text-[#EF4444]" size={24} />,
          title: "Reflux Protection Raft",
          text: "Sodium Alginate forms a floating gel barrier to prevent acid reflux.",
        },
        {
          icon: <GiStomach className="text-[#EF4444]" size={24} />,
          title: "Improved Gut Motility",
          text: "Peppermint & Caraway relax smooth muscles and regulate intestinal movement.",
        },
      ],

      // --------------- INDICATIONS ---------------
      indications: [
        {
          icon: <GiStomach className="text-[#0E7490]" size={22} />,
          text: "Indigestion and bloating after meals.",
        },
        {
          icon: <GiChemicalDrop className="text-[#0E7490]" size={22} />,
          text: "Acid reflux and heartburn.",
        },
        {
          icon: <GiHotSpices className="text-[#0E7490]" size={22} />,
          text: "Discomfort after heavy or fatty meals.",
        },
        {
          icon: <GiStomach className="text-[#0E7490]" size={22} />,
          text: "Functional dyspepsia (proven Peppermint + Caraway combo).",
        },
        {
          icon: <GiChemicalDrop className="text-[#0E7490]" size={22} />,
          text: "Motion sickness, nausea, and slow digestion.",
        },
      ],

      // --------------- DOSAGE ---------------
      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={22} />,
          text: "Chew 1–2 tablets after meals or when experiencing digestive discomfort.",
        },
        {
          icon: <FaRegClock className="text-[#9333EA]" size={22} />,
          text: "Can be used daily when needed.",
        },
        {
          icon: <FaSmile className="text-[#9333EA]" size={22} />,
          text: "Suitable for adults and children above 12 years.",
        },
      ],

      // --------------- PRECAUTIONS ---------------
      precautions: [
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Do not exceed recommended dosage.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={22} />,
          text: "Not recommended for children under 12.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Consult a doctor during pregnancy or breastfeeding.",
        },
      ],

      // --------------- SIDE EFFECTS ---------------
      sideEffects: [
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Rare mild stomach upset.",
        },
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Very mild nausea if taken on empty stomach (rare).",
        },
      ],

      // --------------- STORAGE ---------------
      storage:
        "Store below 25°C in a dry place, away from moisture and direct sunlight.",

      // --------------- PACKAGING ---------------
      packaging: "Chewable tablets – Premium Italian formulation.",
    },
  },
  {
    id: 5,
    name: "Gyno-Due",
    type: "Vaginal Flora Support – Capsules + Tablets",
    department: "Gynecology",
    category: "Vaginal Health",
    brand: "Pharmilano",
    image: "/p5.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Dual-form support (capsules + vaginal/oral tablets) designed to restore and stabilize vaginal flora, prevent recurrent infections, and rebalance microbiota using probiotics, garlic extract, and grapefruit bioflavonoids.",

    fullDesc: {
      about: [
        {
          icon: <GiHerbsBundle className="text-[#0A506F]" size={26} />,
          title: "Supports Vaginal Flora",
          text: "Helps restore vaginal microbiota in women suffering from recurrent bacterial or fungal issues.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "After Antibiotic or Antifungal Therapy",
          text: "Rebalances vaginal flora that gets disrupted after antimicrobial treatment.",
        },
        {
          icon: <GiBodyBalance className="text-[#0A506F]" size={26} />,
          title: "Helps During Pregnancy & Menopause",
          text: "Stabilizes vaginal flora during hormonal fluctuations such as pregnancy or menopause.",
        },
        {
          icon: <GiWaterDrop className="text-[#0A506F]" size={26} />,
          title: "Reduces Vaginal Discomfort",
          text: "Useful in cases of foul-smelling discharge, burning sensation, or vaginal itching.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#0A506F]" size={26} />
          ),
          title: "Dual-Form Efficiency",
          text: "Contains both oral capsules and vaginal/oral tablets for a full internal and local effect.",
        },
      ],

      composition: [
        {
          icon: <GiFlowerPot className="text-[#047857]" size={24} />,
          ingredient: "Grapefruit Seed Dry Extract",
          amount: "60 mg (50% bioflavonoids – 40% naringin)",
        },
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={24} />,
          ingredient: "Deodorized Garlic Extract",
          amount: "50 mg (Capsule) – 2 mg (Tablet)",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={24} />,
          ingredient: "Live Probiotic Cultures (Capsule)",
          amount: "12.3 Billion CFU",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={24} />,
          ingredient: "Live Probiotic Cultures (Tablet)",
          amount: "3.35 Billion CFU",
        },
        {
          icon: <GiEnergyArrow className="text-[#047857]" size={24} />,
          ingredient: "Inositol, Inulin, Citric Components",
          amount: "—",
        },
      ],

      mechanism: [
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Antifungal Bioflavonoids",
          text: "Grapefruit extracts interfere with fungal membrane integrity, protein synthesis, and cell division.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={26} />,
          title: "Garlic Antifungal Action",
          text: "Garlic extract shows strong activity against Candida albicans—stronger than nystatin in test models.",
        },
        {
          icon: <GiBrain className="text-[#EF4444]" size={26} />,
          title: "Probiotic Recolonization",
          text: "Probiotic strains re-establish lactobacillus-dominated flora, lowering vaginal pH and restoring balance.",
        },
        {
          icon: <GiHerbsBundle className="text-[#EF4444]" size={26} />,
          title: "Prevents Dysbiosis & Recurrence",
          text: "Reduces transfer of yeast/pathogens from rectum to vagina through competitive inhibition.",
        },
      ],

      indications: [
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={22} />,
          text: "Recurrent vaginal infections (bacterial/fungal).",
        },
        {
          icon: <FaRegClock className="text-[#0E7490]" size={22} />,
          text: "After antibiotic or antifungal treatment.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Burning, itching, or foul-smelling discharge.",
        },
        {
          icon: <GiHeadbandKnot className="text-[#0E7490]" size={22} />,
          text: "During pregnancy or menopause to stabilize flora.",
        },
        {
          icon: <GiSittingDog className="text-[#0E7490]" size={22} />,
          text: "Bacterial Vaginosis (BV) support.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={22} />,
          text: "Take 1 capsule + 1 vaginal/oral tablet daily.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={22} />,
          text: "Course duration: 10 days.",
        },
        {
          icon: <FaRegSmile className="text-[#9333EA]" size={22} />,
          text: "Can be used sequentially or combined depending on severity.",
        },
      ],

      precautions: [
        {
          icon: <FaEye className="text-[#F97316]" size={22} />,
          text: "Avoid if allergic to garlic or citrus extracts.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Consult a doctor during pregnancy or breastfeeding.",
        },
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Do not exceed recommended daily dose.",
        },
      ],

      sideEffects: [
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Mild gastrointestinal upset (rare).",
        },
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Possible mild vaginal irritation during recolonization phase.",
        },
      ],

      storage: "Store at room temperature below 25°C in a dry place.",

      packaging:
        "Dual blister pack: 10 Capsules + 10 Vaginal/Oral Tablets – Made in Italy.",
    },
  },
  {
    id: 6,
    name: "Citistick",
    type: "Neuro-Energy & Cognitive Performance Formula",
    department: "Neurology",
    category: "Mental Performance & Focus",
    brand: "Pharmilano",
    image: "/p6.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Effervescent neuro-energy formula designed to boost focus, memory, and mental performance using Citicoline, Ginkgo Biloba, Ginseng, and essential B-vitamins for fast cognitive enhancement.",

    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#0A506F]" size={26} />,
          title: "Boosts Mental Energy",
          text: "Provides fast stimulation of brain cells and increases neurotransmitter production responsible for mental alertness.",
        },
        {
          icon: <GiHeadbandKnot className="text-[#0A506F]" size={26} />,
          title: "Enhances Focus & Concentration",
          text: "Improves attention span, mental clarity, and executive function for better performance at work or study.",
        },
        {
          icon: <GiElectric className="text-[#0A506F]" size={26} />,
          title: "Supports Memory Function",
          text: "Citicoline helps repair and maintain neuron cell membranes, essential for learning and memory processing.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#0A506F]" size={26} />
          ),
          title: "Improves Blood Circulation to the Brain",
          text: "Ginkgo Biloba enhances cerebral blood flow, improving oxygen and nutrient delivery.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Anti-Fatigue Neuro Support",
          text: "Reduces brain exhaustion and supports long hours of mental work without crashes.",
        },
      ],

      composition: [
        {
          icon: <GiElectric className="text-[#047857]" size={24} />,
          ingredient: "Citicoline",
          amount: "250 mg",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={24} />,
          ingredient: "Ginkgo Biloba Extract",
          amount: "60 mg",
        },
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={24} />,
          ingredient: "Korean Ginseng Extract",
          amount: "40 mg",
        },
        {
          icon: <GiEnergyArrow className="text-[#047857]" size={24} />,
          ingredient: "Vitamin B6",
          amount: "2 mg",
        },
        {
          icon: <GiWaterDrop className="text-[#047857]" size={24} />,
          ingredient: "Vitamin B12",
          amount: "2 mcg",
        },
      ],

      mechanism: [
        {
          icon: <GiBrain className="text-[#EF4444]" size={26} />,
          title: "Boosts Acetylcholine Levels",
          text: "Citicoline increases acetylcholine synthesis, essential for learning, memory, and fast neural signaling.",
        },
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Enhances Neuron Repair",
          text: "Supports phospholipid production, helping repair damaged neuron membranes and improving brain resilience.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={26} />,
          title: "Improves Cerebral Blood Flow",
          text: "Ginkgo Biloba promotes microcirculation inside the brain, boosting oxygen supply and mental clarity.",
        },
        {
          icon: <GiEnergyArrow className="text-[#EF4444]" size={26} />,
          title: "Natural CNS Stimulation",
          text: "Ginseng provides smooth, sustained cognitive stimulation without jitteriness.",
        },
      ],

      indications: [
        {
          icon: <GiBrain className="text-[#0E7490]" size={22} />,
          text: "Poor focus, concentration difficulties, and mental fog.",
        },
        {
          icon: <FaRegClock className="text-[#0E7490]" size={22} />,
          text: "Long study hours or demanding mental tasks.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Chronic fatigue or low mental energy levels.",
        },
        {
          icon: <GiHeadbandKnot className="text-[#0E7490]" size={22} />,
          text: "Memory decline or slow information processing.",
        },
        {
          icon: <GiSittingDog className="text-[#0E7490]" size={22} />,
          text: "Stress-induced cognitive drop or burnout.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={22} />,
          text: "1 effervescent tablet dissolved in water once daily.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={22} />,
          text: "Best taken in the morning for optimal daytime performance.",
        },
        {
          icon: <FaRegSmile className="text-[#9333EA]" size={22} />,
          text: "Do not exceed the recommended daily dose.",
        },
      ],

      precautions: [
        {
          icon: <FaEye className="text-[#F97316]" size={22} />,
          text: "Avoid using alongside strong stimulants or caffeine-heavy drinks.",
        },
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Use with caution in patients with hypertension.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Consult a doctor during pregnancy or breastfeeding.",
        },
      ],

      sideEffects: [
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Mild headache (rare).",
        },
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Stomach discomfort if taken on an empty stomach.",
        },
        {
          icon: <GiEnergyArrow className="text-[#DC2626]" size={22} />,
          text: "Slight nervousness in stimulant-sensitive individuals.",
        },
      ],

      storage:
        "Store below 25°C in a dry place away from heat and direct sunlight.",

      packaging: "Box of 20 effervescent tablets — Citrus Flavor.",
    },
  },
  {
    id: 7,
    name: "Fer-Milano Ultra",
    type: "Ultra-Microencapsulated Iron Sachets",
    department: "Internal Medicine",
    category: "Iron & Hemoglobin",
    brand: "Pharmilano",
    image: "/p7.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Ultra-microencapsulated iron (FERNANO®) designed for maximum absorption with zero gastric side effects. Gentle, highly bioavailable, and can be taken without water.",

    fullDesc: {
      about: [
        {
          icon: <GiElectric className="text-[#0A506F]" size={26} />,
          title: "Ultra-Microencapsulation Technology",
          text: "Uses patented FERNANO® iron with microcapsules sized only 1–30 μm for superior absorption.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "No Gastric Side Effects",
          text: "Avoids nausea, abdominal pain, constipation, diarrhea, and metallic taste.",
        },
        {
          icon: <GiBrain className="text-[#0A506F]" size={26} />,
          title: "Intestinal Release Only",
          text: "Microcapsules remain intact until reaching the intestine, where iron is released for maximum tolerance.",
        },
        {
          icon: <GiEnergyArrow className="text-[#0A506F]" size={26} />,
          title: "Fast & Highly Bioavailable",
          text: "Provides 30 mg elemental iron (214% NRV) with rapid absorption and high tolerability.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#0A506F]" size={26} />
          ),
          title: "Suitable for All Ages",
          text: "Safe for kids, adults, pregnant, and lactating women.",
        },
      ],

      composition: [
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={24} />,
          ingredient: "FERNANO® Iron Bisglycinate (Ultra-microencapsulated)",
          amount: "30 mg (214% NRV)",
        },
        {
          icon: <GiFlowerPot className="text-[#047857]" size={24} />,
          ingredient: "Mannitol & Sucralose",
          amount: "Sweeteners",
        },
        {
          icon: <GiWaterDrop className="text-[#047857]" size={24} />,
          ingredient: "Citric Acid",
          amount: "Acidifier",
        },
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={24} />,
          ingredient: "Silicon Dioxide",
          amount: "Anti-caking agent",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={24} />,
          ingredient: "Aroma",
          amount: "Flavoring component",
        },
      ],

      mechanism: [
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Calcium–Sodium Exchange",
          text: "Coating breaks only in the intestine when calcium ions are exchanged with sodium, releasing iron.",
        },
        {
          icon: <GiEnergyArrow className="text-[#EF4444]" size={26} />,
          title: "Closer to Intestinal Villi",
          text: "1–30μm microcapsules enhance contact with villi → dramatically improved absorption.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={26} />,
          title: "Optimized Iron Uptake",
          text: "Bisglycinate iron is absorbed efficiently without gastric irritation.",
        },
      ],

      indications: [
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Iron deficiency anemia or low hemoglobin.",
        },
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={22} />,
          text: "Fatigue, weakness, and loss of concentration due to low iron.",
        },
        {
          icon: <GiBrain className="text-[#0E7490]" size={22} />,
          text: "Improved cognitive and energy metabolism.",
        },
        {
          icon: <FaBaby className="text-[#0E7490]" size={22} />,
          text: "Recommended for pregnant and breastfeeding women.",
        },
        {
          icon: <GiHeadbandKnot className="text-[#0E7490]" size={22} />,
          text: "Supports immunity and reduces tiredness and fatigue.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={22} />,
          text: "1 sachet daily.",
        },
        {
          icon: <FaRegSmile className="text-[#9333EA]" size={22} />,
          text: "Empty directly into the mouth — NO water needed.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={22} />,
          text: "Can be taken anytime (morning or evening).",
        },
      ],

      precautions: [
        {
          icon: <FaEye className="text-[#F97316]" size={22} />,
          text: "Avoid exceeding the recommended dose.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Safe for pregnancy, but consult a doctor if taking other supplements.",
        },
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Avoid taking with calcium supplements at the same time.",
        },
      ],

      sideEffects: [
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Extremely well tolerated — GI upset is very rare.",
        },
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Does NOT cause constipation or diarrhea.",
        },
        {
          icon: <GiBrain className="text-[#DC2626]" size={22} />,
          text: "Zero metallic taste thanks to polymeric coating.",
        },
      ],

      storage: "Store below 25°C in a dry place away from humidity.",
      packaging: "Box of 20 buccal sachets — Made in Italy.",

      marketing: [
        {
          icon: <GiEnergyArrow className="text-[#0A506F]" size={24} />,
          text: "Superior absorption vs traditional iron.",
        },
        {
          icon: <GiElectric className="text-[#0A506F]" size={24} />,
          text: "No gastric discomfort at all.",
        },
        {
          icon: <GiLeafSwirl className="text-[#0A506F]" size={24} />,
          text: "Premium patented Italian formulation.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={24} />,
          text: "Perfect for children, adults, pregnant women.",
        },
        {
          icon: <FaRegSmile className="text-[#0A506F]" size={24} />,
          text: "High patient compliance — pleasant flavor.",
        },
      ],
    },
  },
  {
    id: 8,
    name: "Signora Più – Triple Layer Wash",
    type: "Feminine Intimate Cleanser",
    department: "Gynecology",
    category: "Intimate Feminine Care",
    brand: "Pharmilano",
    image: "/p8.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Triple-layer Italian intimate wash designed to balance vaginal pH, soothe irritation, provide long-lasting freshness, and protect the intimate area with natural extracts.",

    fullDesc: {
      about: [
        {
          icon: <GiHerbsBundle className="text-[#0A506F]" size={26} />,
          title: "Triple Layer Advanced Formula",
          text: "A unique 3-phase Italian technology providing cleansing, soothing, and long-lasting protection.",
        },
        {
          icon: <FaLeaf className="text-[#0A506F]" size={26} />,
          title: "Natural Extracts",
          text: "Contains Chamomile, Aloe Vera, and Lactic Acid to support natural flora balance.",
        },
        {
          icon: <GiWaterDrop className="text-[#0A506F]" size={26} />,
          title: "Maintains Healthy pH",
          text: "Helps maintain the natural vaginal pH to prevent irritation and discomfort.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Soothing Effect",
          text: "Reduces itching, dryness, and sensitivity caused by daily factors.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#0A506F]" size={26} />
          ),
          title: "Dermatologically Tested",
          text: "Clinically approved for sensitive skin, providing safe daily intimate hygiene.",
        },
      ],

      composition: [
        {
          icon: <GiFlowerPot className="text-[#047857]" size={24} />,
          ingredient: "Chamomile Extract",
          amount: "Soothing agent",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={24} />,
          ingredient: "Aloe Vera",
          amount: "Hydrating & cooling",
        },
        {
          icon: <GiEnergyArrow className="text-[#047857]" size={24} />,
          ingredient: "Lactic Acid",
          amount: "pH balancing",
        },
        {
          icon: <GiWaterDrop className="text-[#047857]" size={24} />,
          ingredient: "Gentle Surfactants",
          amount: "Soft cleansing action",
        },
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={24} />,
          ingredient: "Natural Antibacterial Extracts",
          amount: "Protection layer",
        },
      ],

      mechanism: [
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Triple Layer Action",
          text: "Each phase provides a specific function: cleansing, soothing, and protective coating.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={26} />,
          title: "Restores Natural Flora",
          text: "Lactic acid maintains healthy flora and prevents bacterial imbalance.",
        },
        {
          icon: <GiStomach className="text-[#EF4444]" size={26} />,
          title: "Deep Soothing",
          text: "Aloe vera and chamomile relieve irritation and hydrate sensitive areas.",
        },
      ],

      indications: [
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={22} />,
          text: "Daily feminine hygiene.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Vaginal irritation, dryness, or discomfort.",
        },
        {
          icon: <GiSittingDog className="text-[#0E7490]" size={22} />,
          text: "Odor control & freshness.",
        },
        {
          icon: <FaLeaf className="text-[#0E7490]" size={22} />,
          text: "Supports natural bacterial balance.",
        },
        {
          icon: <GiHeadbandKnot className="text-[#0E7490]" size={22} />,
          text: "Post-menstrual cleansing routine.",
        },
      ],

      dosage: [
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={22} />,
          text: "Use twice daily or as needed.",
        },
        {
          icon: <FaShower className="text-[#9333EA]" size={22} />,
          text: "Apply gently during shower on the external area only.",
        },
        {
          icon: <FaRegSmile className="text-[#9333EA]" size={22} />,
          text: "Rinse with lukewarm water and dry gently.",
        },
      ],

      precautions: [
        {
          icon: <FaEye className="text-[#F97316]" size={22} />,
          text: "For external use only.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Avoid contact with eyes.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={22} />,
          text: "Keep out of reach of children.",
        },
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Discontinue if irritation persists.",
        },
      ],

      sideEffects: [
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Mild temporary tingling (rare).",
        },
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Very mild dryness if overused.",
        },
      ],

      storage:
        "Store in a cool dry place below 25°C. Keep bottle tightly closed.",
      packaging: "Plastic bottle – Triple-layer formulation – Made in Italy.",
    },
  },
  {
    id: 9,
    name: "ProstaMicro",
    type: "Prostate Health Oral Sticks",
    department: "Urology",
    category: "Prostate Support",
    brand: "Pharmilano",
    image: "/p9.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Ultra-micro emulsified prostate formula containing Serenoa, Pygeum, and Epilobium to improve urinary flow, reduce nocturia, and support prostate health with fast absorption.",

    fullDesc: {
      about: [
        {
          icon: <GiHealthNormal className="text-[#0A506F]" size={26} />,
          title: "Fast Absorption Technology",
          text: "ULTRAMICRO® emulsified formula ensures superior absorption and quicker onset of action.",
        },
        {
          icon: <GiDrop className="text-[#0A506F]" size={26} />,
          title: "Improves Urinary Symptoms",
          text: "Helps reduce nocturia, improves urine flow, and decreases frequency and urgency.",
        },
        {
          icon: <GiPlantRoots className="text-[#0A506F]" size={26} />,
          title: "Triple Botanical Complex",
          text: "A powerful blend of Serenoa, Pygeum, and Epilobium approved by EMA and EAU guidelines.",
        },
        {
          icon: <GiBodyBalance className="text-[#0A506F]" size={26} />,
          title: "Supports Prostate Function",
          text: "Helps shrink the prostate and reduce inflammation without affecting PSA levels.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#0A506F]" size={26} />
          ),
          title: "Clinically Supported",
          text: "Backed by multiple studies including PERMAL, showing superior improvement in IPSS.",
        },
      ],

      composition: [
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={24} />,
          ingredient: "Serenoa Oil (Lipid Sterolic Extract)",
          amount: "350 mg",
        },
        {
          icon: <GiWaterDrop className="text-[#047857]" size={24} />,
          ingredient: "Fatty Acids Intake",
          amount: "297.5 mg",
        },
        {
          icon: <GiPalmTree className="text-[#047857]" size={24} />,
          ingredient: "African Pygeum d.e.",
          amount: "100 mg",
        },
        {
          icon: <GiFlowerPot className="text-[#047857]" size={24} />,
          ingredient: "Epilobium Extract",
          amount: "50 mg",
        },
      ],

      mechanism: [
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Anti-Androgenic Effect",
          text: "Serenoa inhibits 5-alpha reductase (type 1 & 2), reducing DHT levels without impacting PSA.",
        },
        {
          icon: <GiBrain className="text-[#EF4444]" size={26} />,
          title: "Anti-Inflammatory Action",
          text: "Suppresses inflammatory mediators and cytokines, improving prostate comfort.",
        },
        {
          icon: <GiHealing className="text-[#EF4444]" size={26} />,
          title: "Anti-Proliferative Effect",
          text: "Epilobium inhibits prostate cell proliferation and induces apoptosis.",
        },
        {
          icon: <GiLeafSwirl className="text-[#EF4444]" size={26} />,
          title: "Improves Urinary Flow",
          text: "Pygeum reduces prostate size and relieves LUTS including weak stream and nocturia.",
        },
      ],

      indications: [
        {
          icon: <GiMale className="text-[#0E7490]" size={22} />,
          text: "Benign Prostatic Hyperplasia (BPH).",
        },
        {
          icon: <FaRegClock className="text-[#0E7490]" size={22} />,
          text: "Nocturia and frequent night urination.",
        },
        {
          icon: <GiWaterPolo className="text-[#0E7490]" size={22} />,
          text: "Weak urine flow and hesitancy.",
        },
        {
          icon: <GiKidneys className="text-[#0E7490]" size={22} />,
          text: "Lower urinary tract symptoms (LUTS).",
        },
        {
          icon: <GiBodyBalance className="text-[#0E7490]" size={22} />,
          text: "Inflammatory prostate conditions.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={22} />,
          text: "Take 1 stick daily.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={22} />,
          text: "Can be taken directly in the mouth without water.",
        },
        {
          icon: <FaRegSmile className="text-[#9333EA]" size={22} />,
          text: "Recommended for continuous use to maintain prostate health.",
        },
      ],

      precautions: [
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Not intended for individuals under 18 years old.",
        },
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Consult a doctor if using hormonal therapy.",
        },
        {
          icon: <FaEye className="text-[#F97316]" size={22} />,
          text: "Keep out of reach of children.",
        },
      ],

      sideEffects: [
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Mild stomach discomfort (rare).",
        },
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Occasional headache.",
        },
        {
          icon: <GiDrop className="text-[#DC2626]" size={22} />,
          text: "Very rare allergic reactions to botanicals.",
        },
      ],

      storage: "Store below 25°C in a dry place away from sunlight.",
      packaging: "Box containing oral sticks – Made in Italy.",
    },
  },
  {
    id: 10,
    name: "B-Sub",
    type: "Vitamin B12 Sublingual Tablets",
    department: "Internal Medicine",
    category: "Vitamins & Supplements",
    brand: "Pharmilano",
    image: "/p10.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "High-dose Vitamin B12 (Cyanocobalamin) in fast-dissolving sublingual tablets for rapid absorption, improved energy, neurological support, and treatment of B12 deficiency.",

    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#0A506F]" size={26} />,
          title: "What is Vitamin B12?",
          text: "Vitamin B12 is essential for DNA synthesis, red blood cell formation, neurological function, and energy production.",
        },
        {
          icon: <GiChemicalDrop className="text-[#0A506F]" size={26} />,
          title: "Two Active Forms",
          text: "Methylcobalamin supports methionine production, while Adenosylcobalamin converts methylmalonyl-CoA to succinyl-CoA, both vital for cell division.",
        },
        {
          icon: <GiHealthIncrease className="text-[#0A506F]" size={26} />,
          title: "Why B-Sub?",
          text: "Sublingual formula bypasses gastric absorption issues and first-pass metabolism for fast and efficient delivery.",
        },
      ],

      indications: [
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Pernicious anemia due to intrinsic factor deficiency.",
        },
        {
          icon: <GiStomach className="text-[#0E7490]" size={22} />,
          text: "Post-gastrectomy or atrophic gastritis patients.",
        },
        {
          icon: <FaTablets className="text-[#0E7490]" size={22} />,
          text: "Long-term metformin or acid-reducing drug users.",
        },
        {
          icon: <FaLeaf className="text-[#0E7490]" size={22} />,
          text: "Vegans and strict vegetarians.",
        },
        {
          icon: <GiMedicines className="text-[#0E7490]" size={22} />,
          text: "Patients with malabsorption syndromes.",
        },
      ],

      mechanism: [
        {
          icon: <GiChemicalDrop className="text-[#EF4444]" size={26} />,
          title: "Sublingual Absorption",
          text: "Direct uptake through sublingual mucosa, bypassing the GI tract and liver metabolism.",
        },
        {
          icon: <FaSyringe className="text-[#EF4444]" size={26} />,
          title: "Injection Alternative",
          text: "Studies show sublingual B12 provides equal or superior outcomes to intramuscular injections.",
        },
      ],

      composition: [
        {
          icon: <GiChemicalDrop className="text-[#047857]" size={24} />,
          ingredient: "Cyanocobalamin (Vitamin B12)",
          amount: "500 mcg / 1000 mcg",
        },
        {
          icon: <GiMedicines className="text-[#047857]" size={24} />,
          ingredient: "Tablet Form",
          amount: "Fast-dissolving sublingual",
        },
        {
          icon: <FaLeaf className="text-[#047857]" size={24} />,
          ingredient: "Formula",
          amount: "Gluten-free, lactose-free",
        },
      ],

      dosage: [
        {
          icon: <FaRegSmile className="text-[#9333EA]" size={22} />,
          text: "1 tablet daily or as directed by a healthcare professional.",
        },
        {
          icon: <FaClock className="text-[#9333EA]" size={22} />,
          text: "Place under the tongue until fully dissolved.",
        },
        {
          icon: <GiHealthIncrease className="text-[#9333EA]" size={22} />,
          text: "Suitable for long-term maintenance therapy.",
        },
      ],

      precautions: [
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Use with caution in patients with Leber’s optic neuropathy.",
        },
      ],

      sideEffects: [
        {
          icon: <FaRegSmile className="text-[#DC2626]" size={22} />,
          text: "Generally well-tolerated; mild headache may occur rarely.",
        },
      ],

      storage: "Store below 25°C in a dry place away from heat and sunlight.",
      packaging: "Box of 30 sublingual tablets – 1 month supply.",
    },
  },
  {
    id: 11,
    name: "Enerpo Plus",
    type: "Energy & Performance Supplement",
    department: "General Health",
    category: "Energy & Vitality",
    brand: "Pharmilano",
    image: "/p11.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "A comprehensive energy and performance formula combining Ginseng, Arginine, DMG, Royal Jelly, B-vitamins, Blueberry, Magnesium, and Potassium to boost energy, fight fatigue, and enhance physical and mental performance.",

    fullDesc: {
      about: [
        {
          icon: <GiEnergyArrow className="text-[#0A506F]" size={26} />,
          title: "Boosts Energy Levels",
          text: "Formulated to naturally increase physical and mental energy and enhance daily performance.",
        },
        {
          icon: <GiRunningNinja className="text-[#0A506F]" size={26} />,
          title: "Improves Athletic Performance",
          text: "Supports endurance and reduces post-exercise fatigue for better sports performance.",
        },
        {
          icon: <GiHeartPlus className="text-[#0A506F]" size={26} />,
          title: "Adaptogenic Support",
          text: "Ginseng provides tonic adaptogenic effects helping the body resist physical and mental stress.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Antioxidant Protection",
          text: "Blueberry and Ginseng provide strong antioxidant action reducing oxidative stress.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#0A506F]" size={26} />
          ),
          title: "Complete Energy Formula",
          text: "Includes amino acids, B-vitamins, minerals, and superfoods for well-rounded vitality support.",
        },
      ],

      composition: [
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={24} />,
          ingredient: "Panax Ginseng Extract",
          amount: "Standardized Extract",
        },
        {
          icon: <GiEnergyArrow className="text-[#047857]" size={24} />,
          ingredient: "Arginine",
          amount: "Clinically Supported Dose",
        },
        {
          icon: <GiLightningDissipation className="text-[#047857]" size={24} />,
          ingredient: "Dimethylglycine (DMG)",
          amount: "High Potency",
        },
        {
          icon: <GiBee className="text-[#047857]" size={24} />,
          ingredient: "Lyophilized Royal Jelly",
          amount: "Freeze-Dried",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={24} />,
          ingredient: "Blueberry Juice",
          amount: "Rich in Anthocyanins",
        },
        {
          icon: <GiChemicalDrop className="text-[#047857]" size={24} />,
          ingredient: "B Vitamins",
          amount: "Full B-Complex",
        },
        {
          icon: <GiMinerals className="text-[#047857]" size={24} />,
          ingredient: "Magnesium",
          amount: "Essential Daily Value",
        },
        {
          icon: <GiMinerals className="text-[#047857]" size={24} />,
          ingredient: "Potassium",
          amount: "Essential Daily Value",
        },
      ],

      mechanism: [
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Cellular Energy Boosting",
          text: "B-vitamins and Magnesium activate ATP production – the body’s main energy currency.",
        },
        {
          icon: <GiBrain className="text-[#EF4444]" size={26} />,
          title: "Mental Performance Enhancement",
          text: "Ginseng and DMG improve mental clarity, alertness, and focus.",
        },
        {
          icon: <GiStrong className="text-[#EF4444]" size={26} />,
          title: "Improved Blood Flow",
          text: "Arginine increases nitric oxide leading to better muscle oxygenation and endurance.",
        },
        {
          icon: <GiShield className="text-[#EF4444]" size={26} />,
          title: "Antioxidant Stress Reduction",
          text: "Blueberry extract reduces oxidative stress, especially during physical exertion.",
        },
      ],

      indications: [
        {
          icon: <FaBolt className="text-[#0E7490]" size={22} />,
          text: "Low energy levels and constant fatigue.",
        },
        {
          icon: <FaRunning className="text-[#0E7490]" size={22} />,
          text: "Athletes needing better endurance and recovery.",
        },
        {
          icon: <FaBrain className="text-[#0E7490]" size={22} />,
          text: "Mental exhaustion or lack of concentration.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Stress-induced weakness or tiredness.",
        },
        {
          icon: <FaDumbbell className="text-[#0E7490]" size={22} />,
          text: "Muscle fatigue and prolonged soreness.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={22} />,
          text: "1–2 sachets daily, preferably in the morning or before physical activity.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={22} />,
          text: "Dissolve the content in a glass of water and consume immediately.",
        },
      ],

      precautions: [
        {
          icon: <FaExclamationTriangle className="text-[#F97316]" size={22} />,
          text: "Not recommended for hypertensive patients without medical supervision.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={22} />,
          text: "Not suitable for children under 12 years old.",
        },
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Avoid use in case of stimulant sensitivity.",
        },
      ],

      sideEffects: [
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Mild stomach discomfort (rare).",
        },
        {
          icon: <GiBrain className="text-[#DC2626]" size={22} />,
          text: "Headache if taken on an empty stomach.",
        },
        {
          icon: <GiRapidshareArrow className="text-[#DC2626]" size={22} />,
          text: "Mild palpitations in sensitive individuals.",
        },
      ],

      storage: "Store in a cool, dry place below 25°C, away from sunlight.",
      packaging: "Box of 10 sachets – Made in Italy.",
    },
  },
  {
    id: 12,
    name: "Fartiga Plus",
    type: "Advanced Electrolytes & Anti-Fatigue Formula",
    department: "Internal Medicine",
    category: "Electrolytes & Fatigue Support",
    brand: "Pharmilano",
    image: "/p12.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "A fast-absorbing electrolyte and energy support formula designed to restore hydration, prevent fatigue, and enhance muscle and nerve function with Magnesium, Potassium, Vitamin B Complex, and Taurine.",

    fullDesc: {
      about: [
        {
          icon: <GiBodyBalance className="text-[#0A506F]" size={26} />,
          title: "Rapid Electrolyte Restoration",
          text: "Replenishes essential electrolytes lost through sweating, stress, or dehydration to maintain optimal body function.",
        },
        {
          icon: <GiEnergyArrow className="text-[#0A506F]" size={26} />,
          title: "Anti-Fatigue Effect",
          text: "Helps reduce tiredness and supports sustained energy levels throughout the day.",
        },
        {
          icon: <GiWaterDrop className="text-[#0A506F]" size={26} />,
          title: "Enhanced Hydration",
          text: "Improves water absorption at the cellular level, ensuring proper hydration and performance.",
        },
        {
          icon: <GiBrain className="text-[#0A506F]" size={26} />,
          title: "Supports Nerve & Muscle Function",
          text: "Magnesium and Potassium help regulate nerve signals and reduce muscle cramps.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#0A506F]" size={26} />
          ),
          title: "Clinically Proven Formula",
          text: "Designed according to European guidelines for electrolyte replacement and fatigue management.",
        },
      ],

      composition: [
        {
          icon: <GiEnergyArrow className="text-[#047857]" size={24} />,
          ingredient: "Magnesium",
          amount: "300 mg",
        },
        {
          icon: <GiWaterDrop className="text-[#047857]" size={24} />,
          ingredient: "Potassium",
          amount: "300 mg",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={24} />,
          ingredient: "Vitamin B Complex",
          amount: "B1, B2, B6, B12",
        },
        {
          icon: <GiElectric className="text-[#047857]" size={24} />,
          ingredient: "Taurine",
          amount: "100 mg",
        },
      ],

      mechanism: [
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Restores Electrolyte Balance",
          text: "Magnesium and Potassium regulate intracellular and extracellular electrolyte levels.",
        },
        {
          icon: <GiWaterDrop className="text-[#EF4444]" size={26} />,
          title: "Improves Hydration",
          text: "Enhances water transport across cells, preventing dehydration and boosting performance.",
        },
        {
          icon: <GiBrain className="text-[#EF4444]" size={26} />,
          title: "Boosts Energy Production",
          text: "B vitamins support ATP production, reducing fatigue and supporting nerve function.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={26} />,
          title: "Supports Muscles",
          text: "Helps prevent cramps, spasms, and neuromuscular fatigue during physical or daily activities.",
        },
      ],

      indications: [
        {
          icon: <FaRegClock className="text-[#0E7490]" size={22} />,
          text: "General fatigue and tiredness.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Muscle cramps and spasms.",
        },
        {
          icon: <FaTint className="text-[#0E7490]" size={22} />,
          text: "Dehydration or electrolyte loss.",
        },
        {
          icon: <FaLeaf className="text-[#0E7490]" size={22} />,
          text: "Weakness due to low magnesium or potassium levels.",
        },
        {
          icon: <FaBaby className="text-[#0E7490]" size={22} />,
          text: "Suitable for adults and adolescents above 12 years.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={22} />,
          text: "Take 1 sachet daily dissolved in a glass of water.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={22} />,
          text: "Can be taken before or after meals.",
        },
        {
          icon: <FaRegSmile className="text-[#9333EA]" size={22} />,
          text: "Suitable for long-term use under medical supervision.",
        },
      ],

      precautions: [
        {
          icon: <FaEye className="text-[#F97316]" size={22} />,
          text: "Do not exceed the recommended daily dose.",
        },
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Consult your doctor if you have heart or kidney disease.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Not recommended during pregnancy without medical advice.",
        },
      ],

      sideEffects: [
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Mild stomach discomfort (rare).",
        },
        {
          icon: <GiBrain className="text-[#DC2626]" size={22} />,
          text: "Headache in case of overdose.",
        },
      ],

      storage:
        "Store below 25°C in a dry place away from moisture and sunlight.",
      packaging: "Box containing 20 effervescent sachets – Made in Italy.",
    },
  },
  {
    id: 13,
    name: "Micro Uro",
    type: "Urinary Tract Support Sachets",
    department: "Urology",
    category: "Kidney & Urinary Health",
    brand: "Pharmilano",
    image: "/p13.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Advanced urinary tract formulation containing Cranberry, D-Mannose, Potassium Citrate & Hibiscus extract. Helps prevent UTIs, reduces burning urination, improves urine flow, and supports kidney health.",

    fullDesc: {
      about: [
        {
          icon: <GiStomach className="text-[#0A506F]" size={26} />,
          title: "Relieves Burning Urination",
          text: "Helps reduce dysuria and burning sensation during urination thanks to its anti-inflammatory herbal blend.",
        },
        {
          icon: <GiWaterDrop className="text-[#0A506F]" size={26} />,
          title: "Flushes Harmful Bacteria",
          text: "D-Mannose prevents bacteria from adhering to urinary tract walls, promoting natural cleansing.",
        },
        {
          icon: <GiHerbsBundle className="text-[#0A506F]" size={26} />,
          title: "Strong Antioxidant Action",
          text: "Cranberry and Hibiscus extracts provide strong antioxidant and antibacterial effects.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Supports Kidney Function",
          text: "Improves urine pH balance and supports kidneys in flushing toxins effectively.",
        },
        {
          icon: (
            <MdOutlineHealthAndSafety className="text-[#0A506F]" size={26} />
          ),
          title: "Prevents UTI Recurrence",
          text: "Ideal for women who suffer from frequent urinary tract infections and repeated episodes.",
        },
      ],

      composition: [
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={24} />,
          ingredient: "Cranberry Dry Extract",
          amount: "200 mg",
        },
        {
          icon: <GiEnergyArrow className="text-[#047857]" size={24} />,
          ingredient: "D-Mannose",
          amount: "1000 mg",
        },
        {
          icon: <GiFlowerPot className="text-[#047857]" size={24} />,
          ingredient: "Hibiscus Extract",
          amount: "50 mg",
        },
        {
          icon: <GiWaterDrop className="text-[#047857]" size={24} />,
          ingredient: "Potassium Citrate",
          amount: "450 mg",
        },
      ],

      mechanism: [
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Prevents Bacterial Adhesion",
          text: "D-Mannose binds to E.coli receptors, preventing them from sticking to the urinary tract lining.",
        },
        {
          icon: <GiBrain className="text-[#EF4444]" size={26} />,
          title: "Acidifies Urine",
          text: "Cranberry reduces bacterial growth by lowering urine pH.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={26} />,
          title: "Anti-inflammatory Action",
          text: "Hibiscus reduces inflammation and soothes urinary mucosa.",
        },
        {
          icon: <GiBodyBalance className="text-[#EF4444]" size={26} />,
          title: "Alkalinizes Urine",
          text: "Potassium citrate balances urine acidity, reducing pain and improving urine flow.",
        },
      ],

      indications: [
        {
          icon: <FaRegClock className="text-[#0E7490]" size={22} />,
          text: "Burning urination & dysuria.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Recurrent urinary tract infections (UTIs).",
        },
        {
          icon: <GiStomach className="text-[#0E7490]" size={22} />,
          text: "Urinary frequency and urgency.",
        },
        {
          icon: <GiLeafSwirl className="text-[#0E7490]" size={22} />,
          text: "Urine acidity imbalance.",
        },
        {
          icon: <GiHealing className="text-[#0E7490]" size={22} />,
          text: "Women with repeated UTIs after intercourse.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={22} />,
          text: "One sachet dissolved in half a glass of water, once or twice daily.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={22} />,
          text: "Best taken after meals.",
        },
        {
          icon: <FaRegSmile className="text-[#9333EA]" size={22} />,
          text: "Drink plenty of water throughout the day to enhance effect.",
        },
      ],

      precautions: [
        {
          icon: <FaEye className="text-[#F97316]" size={22} />,
          text: "Not suitable for patients with severe renal impairment without medical supervision.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={22} />,
          text: "Not recommended for children under 12 years.",
        },
        {
          icon: <FaHeartbeat className="text-[#F97316]" size={22} />,
          text: "Patients with kidney stones should consult a physician before use.",
        },
      ],

      sideEffects: [
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Mild stomach discomfort (rare).",
        },
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Bloating if taken without enough water.",
        },
      ],

      storage:
        "Store below 25°C in a dry place. Protect from humidity and direct sunlight.",

      packaging: "Box of 14 sachets – Made in Italy.",
    },
  },
  {
    id: 14,
    name: "EYECORD",
    type: "Vision Support Capsules",
    department: "Ophthalmology",
    category: "Eye Health & Antioxidants",
    brand: "Lacora",
    image: "/p14.png",
    isNew: false,

    shortDesc:
      "A comprehensive eye-support formula designed to protect eyesight, reduce eye strain, fight blue-light damage, and enhance retinal health using natural antioxidants.",

    fullDesc: {
      // ABOUT
      about: [
        {
          icon: <FaEye className="text-[#0A506F]" size={24} />,
          title: "Maintains Eye Health",
          text: "Supports overall eye function and helps maintain moisture and comfort.",
        },
        {
          icon: <GiBrain className="text-[#0A506F]" size={24} />,
          title: "Supports Vision",
          text: "Helps enhance visual clarity and reduce blurriness caused by stress or strain.",
        },
        {
          icon: <GiLightningDissipation className="text-[#0A506F]" size={24} />,
          title: "Blue Light Protection",
          text: "Helps shield the eyes from harmful blue-light sources such as phones and screens.",
        },
        {
          icon: <GiHeartPlus className="text-[#0A506F]" size={24} />,
          title: "Powerful Antioxidant",
          text: "Provides antioxidant support that protects eye tissues from oxidative damage.",
        },
        {
          icon: <GiHealthIncrease className="text-[#0A506F]" size={24} />,
          title: "Retinal Health Support",
          text: "Fortifies retinal cells and helps maintain long-term visual performance.",
        },
      ],

      // COMPOSITION
      composition: [
        {
          icon: <GiMinerals className="text-[#047857]" size={22} />,
          ingredient: "Lutein",
          amount: "10 mg",
        },
        {
          icon: <GiPlantRoots className="text-[#047857]" size={22} />,
          ingredient: "Zeaxanthin",
          amount: "2 mg",
        },
        {
          icon: <GiChemicalDrop className="text-[#047857]" size={22} />,
          ingredient: "Vitamin A",
          amount: "5000 IU",
        },
        {
          icon: <GiBubbles className="text-[#047857]" size={22} />,
          ingredient: "Vitamin C",
          amount: "60 mg",
        },
        {
          icon: <GiEnergyArrow className="text-[#047857]" size={22} />,
          ingredient: "Vitamin E",
          amount: "15 mg",
        },
        {
          icon: <GiStrong className="text-[#047857]" size={22} />,
          ingredient: "Zinc",
          amount: "10 mg",
        },
      ],

      // MECHANISM OF ACTION
      mechanism: [
        {
          icon: <GiHealing className="text-[#EF4444]" size={24} />,
          title: "Macular Pigment Protection",
          text: "Lutein & Zeaxanthin increase macular pigment density which filters harmful blue light.",
        },
        {
          icon: <GiElectric className="text-[#EF4444]" size={24} />,
          title: "Antioxidant Defense",
          text: "Vitamins A, C, and E neutralize free radicals and reduce oxidative stress on the retina.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={24} />,
          title: "Retinal Cell Fortification",
          text: "Helps enhance the resilience of retinal cells for better long-term visual function.",
        },
      ],

      // INDICATIONS
      indications: [
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={20} />,
          text: "Eye strain due to long screen exposure.",
        },
        {
          icon: <FaRegClock className="text-[#0E7490]" size={20} />,
          text: "Weak night vision or difficulty focusing in low light.",
        },
        {
          icon: <GiEyeTarget className="text-[#0E7490]" size={22} />,
          text: "Protection against blue-light–related fatigue.",
        },
        {
          icon: <GiHealthNormal className="text-[#0E7490]" size={22} />,
          text: "Support for retinal and macular health.",
        },
        {
          icon: <GiBodyBalance className="text-[#0E7490]" size={22} />,
          text: "People with poor nutrition affecting eyesight.",
        },
      ],

      // DOSAGE
      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={20} />,
          text: "Take 1 capsule daily after a meal.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={20} />,
          text: "Swallow with sufficient water.",
        },
        {
          icon: <FaClock className="text-[#9333EA]" size={20} />,
          text: "Use for at least 4–6 weeks to experience improved visual comfort.",
        },
      ],

      // PRECAUTIONS
      precautions: [
        {
          icon: <FaExclamationTriangle className="text-[#F97316]" size={20} />,
          text: "Do not exceed the recommended dose.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={20} />,
          text: "Not recommended for children under 12 years.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={20} />,
          text: "Consult a doctor during pregnancy or breastfeeding.",
        },
      ],

      // SIDE EFFECTS
      sideEffects: [
        {
          icon: <GiStomach className="text-[#DC2626]" size={20} />,
          text: "Mild stomach upset (rare).",
        },
        {
          icon: <GiHeadbandKnot className="text-[#DC2626]" size={20} />,
          text: "Occasional headache in sensitive individuals.",
        },
        {
          icon: <GiDrop className="text-[#DC2626]" size={20} />,
          text: "Dry eyes if taken without hydration.",
        },
      ],

      // STORAGE
      storage:
        "Store in a cool, dry place below 25°C away from sunlight and moisture.",

      // PACKAGING
      packaging: "Box of 30 capsules – 100% natural eye support formula.",
    },
  },
  {
    id: 15, // غيّر الرقم حسب ترتيبك
    name: "Hicora",
    type: "Colon Care Capsules",
    department: "Gastroenterology",
    category: "IBS & Digestive Support",
    brand: "Lacora",
    image: "/p15.png", // غيّرها لمسار الصورة عندك
    isNew: false,

    shortDesc:
      "A natural formula designed to support colon health, relieve IBS symptoms, reduce bloating, improve bowel movement, and maintain digestive comfort.",

    fullDesc: {
      about: [
        {
          icon: <GiStomach className="text-[#0A506F]" size={24} />,
          title: "Supports Colon Function",
          text: "Helps regulate the movement of the colon and improve digestive comfort throughout the day.",
        },
        {
          icon: <GiCycle className="text-[#0A506F]" size={24} />,
          title: "Improves Bowel Movement",
          text: "Assists in relieving constipation, dry stools, and irregular bowel habits.",
        },
        {
          icon: <GiHotSpices className="text-[#0A506F]" size={24} />,
          title: "Relieves Bloating & Gas",
          text: "Natural herbal extracts help reduce trapped gas, abdominal discomfort, and bloating.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={24} />,
          title: "Soothes IBS Symptoms",
          text: "Recommended for individuals with irritable bowel syndrome and frequent digestive imbalance.",
        },
        {
          icon: <GiHealthNormal className="text-[#0A506F]" size={24} />,
          title: "Supports Healthy Digestion",
          text: "Promotes overall digestive wellness and a healthy colon environment.",
        },
      ],

      composition: [
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={22} />,
          ingredient: "Herbal Extract Complex",
          amount: "Standardized blend for colon support",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={22} />,
          ingredient: "Fiber-Based Ingredients",
          amount: "Natural plant fibers",
        },
        {
          icon: <GiWaterDrop className="text-[#047857]" size={22} />,
          ingredient: "Hydration Support Components",
          amount: "Helps bowel movement",
        },
      ],

      mechanism: [
        {
          icon: <GiBrain className="text-[#EF4444]" size={24} />,
          title: "Regulates Gut-Brain Axis",
          text: "Helps calm the digestive nervous system and reduce colon spasms.",
        },
        {
          icon: <GiStomach className="text-[#EF4444]" size={24} />,
          title: "Enhances Intestinal Movement",
          text: "Promotes smoother bowel movement and relieves digestive discomfort.",
        },
        {
          icon: <GiHealing className="text-[#EF4444]" size={24} />,
          title: "Anti-Inflammatory Effect",
          text: "Helps reduce colon irritation, bloating, and cramping.",
        },
      ],

      indications: [
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={20} />,
          text: "Irritable Bowel Syndrome (IBS).",
        },
        {
          icon: <FaRegClock className="text-[#0E7490]" size={20} />,
          text: "Dry, hard stools and constipation.",
        },
        {
          icon: <GiStomach className="text-[#0E7490]" size={20} />,
          text: "Bloating and abdominal gas.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={20} />,
          text: "Digestive discomfort during pregnancy (under medical supervision).",
        },
        {
          icon: <GiCycle className="text-[#0E7490]" size={20} />,
          text: "Colic and irregular bowel movement.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={20} />,
          text: "Take 1–2 capsules daily with meals.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={20} />,
          text: "Consume with a full glass of water for optimal absorption.",
        },
        {
          icon: <FaRegClock className="text-[#9333EA]" size={20} />,
          text: "Recommended continuous use for at least 1–2 weeks.",
        },
      ],

      precautions: [
        {
          icon: <FaEye className="text-[#F97316]" size={20} />,
          text: "Avoid use in case of severe abdominal pain or unknown symptoms.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={20} />,
          text: "Not recommended for children under 12 years old.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={20} />,
          text: "Consult a doctor during pregnancy or while breastfeeding.",
        },
      ],

      sideEffects: [
        {
          icon: <GiBubbles className="text-[#DC2626]" size={20} />,
          text: "Mild gas or increased bowel movement (temporary).",
        },
        {
          icon: <GiStomach className="text-[#DC2626]" size={20} />,
          text: "Rare stomach discomfort.",
        },
      ],

      storage:
        "Store in a cool, dry place below 25°C. Protect from sunlight and moisture.",

      packaging: "Carton box containing 30 capsules – Lacora Nutrition.",
    },
  },
  {
    id: 16, // غيّر الرقم حسب ترتيبك
    name: "Becormix Renaseptic",
    type: "Kidney & Urinary Tract Powder",
    department: "Urology & Nephrology",
    category: "UTI & Kidney Support",
    brand: "Lacora",
    image: "/p16.png", // عدّل المسار للصورة
    isNew: false,

    shortDesc:
      "A herbal powder formula designed to support kidney health, relieve urinary tract discomfort, reduce inflammation, and promote natural detoxification.",

    fullDesc: {
      // ========================= ABOUT =========================
      about: [
        {
          icon: <GiKidneys className="text-[#0A506F]" size={26} />,
          title: "Supports Kidney Function",
          text: "Helps maintain healthy kidney filtration and promotes urinary system balance.",
        },
        {
          icon: <GiWaterDrop className="text-[#0A506F]" size={26} />,
          title: "Enhances Urine Flow",
          text: "Improves natural diuresis which helps flush toxins and reduce urinary discomfort.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Anti-Inflammatory Effect",
          text: "Provides soothing relief in cases of urinary tract irritation and mild infections.",
        },
        {
          icon: <GiShield className="text-[#0A506F]" size={26} />,
          title: "Herbal Protective Formula",
          text: "Contains herbal ingredients known for kidney and urinary protection.",
        },
        {
          icon: <GiHealthNormal className="text-[#0A506F]" size={26} />,
          title: "Natural Detox Support",
          text: "Aids the body in eliminating harmful substances through enhanced urine filtration.",
        },
      ],

      // ========================= COMPOSITION =========================
      composition: [
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={20} />,
          ingredient: "Herbal Kidney Support Blend",
          amount: "Standardized extract mixture",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={20} />,
          ingredient: "Antioxidant Plant Extracts",
          amount: "Rich in natural protective compounds",
        },
        {
          icon: <GiWaterBolt className="text-[#047857]" size={20} />,
          ingredient: "Urinary Flow Enhancers",
          amount: "Supports diuretic action",
        },
      ],

      // ========================= MECHANISM =========================
      mechanism: [
        {
          icon: <GiKidneys className="text-[#EF4444]" size={24} />,
          title: "Enhances Kidney Filtration",
          text: "Improves glomerular filtration helping kidneys eliminate toxins efficiently.",
        },
        {
          icon: <GiWaterDrop className="text-[#EF4444]" size={24} />,
          title: "Supports Healthy Urine Flow",
          text: "Promotes natural diuresis to relieve urinary congestion.",
        },
        {
          icon: <GiHealing className="text-[#EF4444]" size={24} />,
          title: "Reduces Inflammation",
          text: "Helps calm irritation within the urinary tract lining.",
        },
      ],

      // ========================= INDICATIONS =========================
      indications: [
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={20} />,
          text: "Urinary tract discomfort and inflammation.",
        },
        {
          icon: <GiKidneys className="text-[#0E7490]" size={20} />,
          text: "Kidney stress or weak filtration efficiency.",
        },
        {
          icon: <GiWaterBolt className="text-[#0E7490]" size={20} />,
          text: "Mild urinary retention or low urine output.",
        },
        {
          icon: <GiCycle className="text-[#0E7490]" size={20} />,
          text: "Helps flush renal sand (small crystals).",
        },
        {
          icon: <GiShield className="text-[#0E7490]" size={20} />,
          text: "General urinary tract protection.",
        },
      ],

      // ========================= DOSAGE =========================
      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={20} />,
          text: "1 sachet dissolved in a glass of water, once or twice daily.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={20} />,
          text: "Ensure adequate water intake to support kidney function.",
        },
        {
          icon: <FaClock className="text-[#9333EA]" size={20} />,
          text: "Best taken after meals for improved absorption.",
        },
      ],

      // ========================= PRECAUTIONS =========================
      precautions: [
        {
          icon: <FaLeaf className="text-[#F97316]" size={20} />,
          text: "Consult a doctor if symptoms persist for more than 3 days.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={20} />,
          text: "Not suitable for children under 12.",
        },
        {
          icon: <FaExclamationTriangle className="text-[#F97316]" size={20} />,
          text: "Avoid use in severe kidney failure unless medically supervised.",
        },
      ],

      // ========================= SIDE EFFECTS =========================
      sideEffects: [
        {
          icon: <GiBubbles className="text-[#DC2626]" size={20} />,
          text: "Mild increase in urination frequency.",
        },
        {
          icon: <GiStomach className="text-[#DC2626]" size={20} />,
          text: "Occasional mild stomach discomfort.",
        },
      ],

      // ========================= STORAGE =========================
      storage: "Store below 25°C in a dry place away from heat and moisture.",

      // ========================= PACKAGING =========================
      packaging: "Box of 14 sachets – Lacora Nutrition.",
    },
  },
  {
    id: 17, // غيّر الرقم حسب ترتيبك
    name: "Vitaflex",
    type: "Joint & Bone Support Capsules",
    department: "Orthopedics & Rheumatology",
    category: "Joint Health",
    brand: "Lacora",
    image: "/p17.png", // عدّل المسار
    isNew: false,

    shortDesc:
      "Advanced joint support formula containing Glucosamine, Chondroitin, Collagen, and Vitamin C to enhance mobility, reduce stiffness, and support cartilage regeneration.",

    fullDesc: {
      // ========================= ABOUT =========================
      about: [
        {
          icon: <GiStrong className="text-[#0A506F]" size={26} />,
          title: "Supports Joint Mobility",
          text: "Improves flexibility and reduces stiffness in major joints.",
        },
        {
          icon: <GiHealthNormal className="text-[#0A506F]" size={26} />,
          title: "Cartilage Protection",
          text: "Provides essential nutrients that help protect cartilage from wear and tear.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Promotes Tissue Repair",
          text: "Collagen and Vitamin C support natural joint tissue regeneration.",
        },
        {
          icon: <FaDumbbell className="text-[#0A506F]" size={26} />,
          title: "Enhances Physical Performance",
          text: "Supports athletes and active individuals by improving joint endurance.",
        },
      ],

      // ========================= COMPOSITION =========================
      composition: [
        {
          icon: <GiMedicines className="text-[#047857]" size={20} />,
          ingredient: "Glucosamine Sulphate",
          amount: "Standard dose",
        },
        {
          icon: <GiMedicines className="text-[#047857]" size={20} />,
          ingredient: "Chondroitin Sulphate",
          amount: "Standard dose",
        },
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={20} />,
          ingredient: "Collagen Hydrolysate",
          amount: "Purified form",
        },
        {
          icon: <FaLeaf className="text-[#047857]" size={20} />,
          ingredient: "Vitamin C",
          amount: "Supports collagen synthesis",
        },
      ],

      // ========================= MECHANISM =========================
      mechanism: [
        {
          icon: <GiStrong className="text-[#EF4444]" size={24} />,
          title: "Joint Strengthening",
          text: "Glucosamine and Chondroitin nourish cartilage and reduce friction.",
        },
        {
          icon: <GiHealthIncrease className="text-[#EF4444]" size={24} />,
          title: "Enhanced Cartilage Repair",
          text: "Collagen promotes tissue healing and enhances joint elasticity.",
        },
        {
          icon: <FaBolt className="text-[#EF4444]" size={24} />,
          title: "Anti-inflammatory Effect",
          text: "Reduces joint discomfort caused by inflammation and overuse.",
        },
      ],

      // ========================= INDICATIONS =========================
      indications: [
        {
          icon: <FaRunning className="text-[#0E7490]" size={20} />,
          text: "Joint pain and stiffness.",
        },
        {
          icon: <GiStrong className="text-[#0E7490]" size={20} />,
          text: "Osteoarthritis and cartilage degeneration.",
        },
        {
          icon: <GiBodyBalance className="text-[#0E7490]" size={20} />,
          text: "Weak or overloaded joints from heavy activity.",
        },
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={20} />,
          text: "Supports athletes during training & recovery.",
        },
      ],

      // ========================= DOSAGE =========================
      dosage: [
        {
          icon: <FaTablets className="text-[#9333EA]" size={20} />,
          text: "Take 1–2 capsules daily with meals.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={20} />,
          text: "Drink enough water for optimal absorption.",
        },
        {
          icon: <FaClock className="text-[#9333EA]" size={20} />,
          text: "Best taken consistently for at least 4–6 weeks.",
        },
      ],

      // ========================= PRECAUTIONS =========================
      precautions: [
        {
          icon: <FaExclamationTriangle className="text-[#F97316]" size={20} />,
          text: "Avoid if allergic to shellfish (Glucosamine source).",
        },
        {
          icon: <FaEye className="text-[#F97316]" size={20} />,
          text: "Consult a doctor if taking anticoagulants.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={20} />,
          text: "Not recommended for children.",
        },
      ],

      // ========================= SIDE EFFECTS =========================
      sideEffects: [
        {
          icon: <GiStomach className="text-[#DC2626]" size={20} />,
          text: "Mild stomach discomfort in some individuals.",
        },
        {
          icon: <GiBubbles className="text-[#DC2626]" size={20} />,
          text: "Occasional bloating.",
        },
      ],

      // ========================= STORAGE =========================
      storage:
        "Store in a cool, dry place below 25°C away from direct sunlight.",

      // ========================= PACKAGING =========================
      packaging: "Box of 30 capsules – Lacora Nutrition.",
    },
  },
  {
    id: 18, // غيّر الرقم حسب ترتيبك
    name: "Vitaflex",
    type: "Joint & Bone Support Capsules",
    department: "Orthopedics & Rheumatology",
    category: "Joint Health",
    brand: "Lacora",
    image: "/p18.png", // عدّل المسار
    isNew: false,

    shortDesc:
      "Advanced joint support formula containing Glucosamine, Chondroitin, Collagen, and Vitamin C to enhance mobility, reduce stiffness, and support cartilage regeneration.",

    fullDesc: {
      // ========================= ABOUT =========================
      about: [
        {
          icon: <GiStrong className="text-[#0A506F]" size={26} />,
          title: "Supports Joint Mobility",
          text: "Improves flexibility and reduces stiffness in major joints.",
        },
        {
          icon: <GiHealthNormal className="text-[#0A506F]" size={26} />,
          title: "Cartilage Protection",
          text: "Provides essential nutrients that help protect cartilage from wear and tear.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Promotes Tissue Repair",
          text: "Collagen and Vitamin C support natural joint tissue regeneration.",
        },
        {
          icon: <FaDumbbell className="text-[#0A506F]" size={26} />,
          title: "Enhances Physical Performance",
          text: "Supports athletes and active individuals by improving joint endurance.",
        },
      ],

      // ========================= COMPOSITION =========================
      composition: [
        {
          icon: <GiMedicines className="text-[#047857]" size={20} />,
          ingredient: "Glucosamine Sulphate",
          amount: "Standard dose",
        },
        {
          icon: <GiMedicines className="text-[#047857]" size={20} />,
          ingredient: "Chondroitin Sulphate",
          amount: "Standard dose",
        },
        {
          icon: <GiHerbsBundle className="text-[#047857]" size={20} />,
          ingredient: "Collagen Hydrolysate",
          amount: "Purified form",
        },
        {
          icon: <FaLeaf className="text-[#047857]" size={20} />,
          ingredient: "Vitamin C",
          amount: "Supports collagen synthesis",
        },
      ],

      // ========================= MECHANISM =========================
      mechanism: [
        {
          icon: <GiStrong className="text-[#EF4444]" size={24} />,
          title: "Joint Strengthening",
          text: "Glucosamine and Chondroitin nourish cartilage and reduce friction.",
        },
        {
          icon: <GiHealthIncrease className="text-[#EF4444]" size={24} />,
          title: "Enhanced Cartilage Repair",
          text: "Collagen promotes tissue healing and enhances joint elasticity.",
        },
        {
          icon: <FaBolt className="text-[#EF4444]" size={24} />,
          title: "Anti-inflammatory Effect",
          text: "Reduces joint discomfort caused by inflammation and overuse.",
        },
      ],

      // ========================= INDICATIONS =========================
      indications: [
        {
          icon: <FaRunning className="text-[#0E7490]" size={20} />,
          text: "Joint pain and stiffness.",
        },
        {
          icon: <GiStrong className="text-[#0E7490]" size={20} />,
          text: "Osteoarthritis and cartilage degeneration.",
        },
        {
          icon: <GiBodyBalance className="text-[#0E7490]" size={20} />,
          text: "Weak or overloaded joints from heavy activity.",
        },
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={20} />,
          text: "Supports athletes during training & recovery.",
        },
      ],

      // ========================= DOSAGE =========================
      dosage: [
        {
          icon: <FaTablets className="text-[#9333EA]" size={20} />,
          text: "Take 1–2 capsules daily with meals.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={20} />,
          text: "Drink enough water for optimal absorption.",
        },
        {
          icon: <FaClock className="text-[#9333EA]" size={20} />,
          text: "Best taken consistently for at least 4–6 weeks.",
        },
      ],

      // ========================= PRECAUTIONS =========================
      precautions: [
        {
          icon: <FaExclamationTriangle className="text-[#F97316]" size={20} />,
          text: "Avoid if allergic to shellfish (Glucosamine source).",
        },
        {
          icon: <FaEye className="text-[#F97316]" size={20} />,
          text: "Consult a doctor if taking anticoagulants.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={20} />,
          text: "Not recommended for children.",
        },
      ],

      // ========================= SIDE EFFECTS =========================
      sideEffects: [
        {
          icon: <GiStomach className="text-[#DC2626]" size={20} />,
          text: "Mild stomach discomfort in some individuals.",
        },
        {
          icon: <GiBubbles className="text-[#DC2626]" size={20} />,
          text: "Occasional bloating.",
        },
      ],

      // ========================= STORAGE =========================
      storage:
        "Store in a cool, dry place below 25°C away from direct sunlight.",

      // ========================= PACKAGING =========================
      packaging: "Box of 30 capsules – Lacora Nutrition.",
    },
  },
  {
    id: 19, // عدّله حسب ترتيبك
    name: "Becormix-Boost",
    type: "Vitamin B-Complex Capsules",
    department: "Neurology",
    category: "Nerve Support",
    brand: "Lacora",
    image: "/p19.png",
    isNew: false,

    shortDesc:
      "A high-strength vitamin B complex designed to support nerve repair, improve body energy, and aid recovery in cases of nerve weakness such as facial palsy.",

    fullDesc: {
      // ===================== ABOUT =====================
      about: [
        {
          icon: <GiBrain className="text-[#0A506F]" size={26} />,
          title: "Supports Nerve Repair",
          text: "Enhances regeneration of damaged peripheral nerves and boosts neural function.",
        },
        {
          icon: <FaBolt className="text-[#0A506F]" size={26} />,
          title: "Boosts Physical Energy",
          text: "Rich B-complex content restores vitality and reduces chronic fatigue.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Nerve-Muscle Support",
          text: "Improves communication between nerves and muscles for better control.",
        },
        {
          icon: <FaRegSmile className="text-[#0A506F]" size={26} />,
          title: "Helps with Facial Palsy",
          text: "Promotes recovery in facial nerve weakness by enhancing nerve repair pathways.",
        },
      ],

      // ===================== COMPOSITION =====================
      composition: [
        {
          icon: <GiMedicines className="text-[#047857]" size={20} />,
          ingredient: "Vitamin B1",
          amount: "Thiamine – essential for nerve impulses",
        },
        {
          icon: <GiMedicines className="text-[#047857]" size={20} />,
          ingredient: "Vitamin B6",
          amount: "Pyridoxine – neurotransmitter production & nerve health",
        },
        {
          icon: <GiMedicines className="text-[#047857]" size={20} />,
          ingredient: "Vitamin B12",
          amount: "Cobalamin – myelin sheath repair & energy production",
        },
      ],

      // ===================== MECHANISM =====================
      mechanism: [
        {
          icon: <GiRapidshareArrow className="text-[#EF4444]" size={24} />,
          title: "Myelin Repair",
          text: "Promotes regeneration of the nerve-protective myelin sheath.",
        },
        {
          icon: <GiBrain className="text-[#EF4444]" size={24} />,
          title: "Improved Neurotransmission",
          text: "Enhances balance of neurotransmitters essential for nerve signaling.",
        },
        {
          icon: <FaRunning className="text-[#EF4444]" size={24} />,
          title: "Boosted Nerve-Muscle Activation",
          text: "Enhances the efficiency of electrical signals driving muscle movement.",
        },
      ],

      // ===================== INDICATIONS =====================
      indications: [
        {
          icon: <GiHeadbandKnot className="text-[#0E7490]" size={20} />,
          text: "Peripheral neuropathy & nerve damage.",
        },
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={20} />,
          text: "Facial palsy (Bell’s palsy).",
        },
        {
          icon: <FaBolt className="text-[#0E7490]" size={20} />,
          text: "Low energy and chronic fatigue.",
        },
        {
          icon: <GiStrong className="text-[#0E7490]" size={20} />,
          text: "Weakness due to nerve dysfunction.",
        },
      ],

      // ===================== DOSAGE =====================
      dosage: [
        {
          icon: <FaTablets className="text-[#9333EA]" size={20} />,
          text: "Take 1 capsule daily with a meal.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={20} />,
          text: "Swallow with water; do not chew.",
        },
        {
          icon: <FaClock className="text-[#9333EA]" size={20} />,
          text: "Recommended duration for nerve repair: 6–12 weeks.",
        },
      ],

      // ===================== PRECAUTIONS =====================
      precautions: [
        {
          icon: <FaExclamationTriangle className="text-[#F97316]" size={20} />,
          text: "Do not exceed the advised dose.",
        },
        {
          icon: <GiStomach className="text-[#F97316]" size={20} />,
          text: "May cause mild stomach upset if taken without food.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={20} />,
          text: "Not recommended for children unless prescribed.",
        },
      ],

      // ===================== SIDE EFFECTS =====================
      sideEffects: [
        {
          icon: <GiBubbles className="text-[#DC2626]" size={20} />,
          text: "Rare nausea or digestive discomfort.",
        },
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={20} />,
          text: "Mild tingling due to nerve stimulation.",
        },
      ],

      // ===================== STORAGE =====================
      storage:
        "Store below 25°C in a dry place, away from moisture and direct sunlight.",

      // ===================== PACKAGING =====================
      packaging: "Box of 60 capsules – Lacora Nutrition.",
    },
  },
  {
    id: 20, // عدّله حسب ترتيبك
    name: "Nuclomax",
    type: "Neuropathy Support Capsules",
    department: "Neurology",
    category: "Nerve Support",
    brand: "Lacora",
    image: "/p20.png",
    isNew: false,

    shortDesc:
      "Advanced formula designed to support nerve function and relieve neuropathic pain, especially in diabetic, metabolic, alcohol-related, and post-herpetic neuropathies.",

    fullDesc: {
      // ===================== ABOUT =====================
      about: [
        {
          icon: <GiBrain className="text-[#0A506F]" size={26} />,
          title: "Neuropathy Support",
          text: "Improves nerve conduction and helps restore damaged peripheral nerves.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Pain Relief",
          text: "Helps reduce burning, tingling, and sharp neuropathic pain sensations.",
        },
        {
          icon: <FaBolt className="text-[#0A506F]" size={26} />,
          title: "Boosts Energy Metabolism",
          text: "Supports mitochondrial function and energy production in nerve cells.",
        },
        {
          icon: <GiBodyBalance className="text-[#0A506F]" size={26} />,
          title: "Improves Nerve Sensitivity",
          text: "Helps restore normal sensory perception in chronic neuropathy.",
        },
      ],

      // ===================== INDICATIONS =====================
      indications: [
        {
          icon: <GiStomach className="text-[#0E7490]" size={20} />,
          text: "Diabetic neuropathies.",
        },
        {
          icon: <GiCycle className="text-[#0E7490]" size={20} />,
          text: "Metabolic neuropathies.",
        },
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={20} />,
          text: "Neuritis and neuralgia.",
        },
        {
          icon: <FaTint className="text-[#0E7490]" size={20} />,
          text: "Neuropathies due to alcoholism.",
        },
        {
          icon: <GiChemicalDrop className="text-[#0E7490]" size={20} />,
          text: "Post-herpes zoster neuropathy.",
        },
        {
          icon: <GiStrong className="text-[#0E7490]" size={20} />,
          text: "Osteoarthritic neuralgia.",
        },
      ],

      // ===================== COMPOSITION =====================
      composition: [
        {
          icon: <GiMedicines className="text-[#047857]" size={20} />,
          ingredient: "Vitamin B1 + B6 + B12",
          amount:
            "Essential combination for nerve repair and neurotransmission.",
        },
        {
          icon: <GiMinerals className="text-[#047857]" size={20} />,
          ingredient: "Nerve-supporting co-factors",
          amount: "Improves metabolic activity of nerve cells.",
        },
      ],

      // ===================== MECHANISM =====================
      mechanism: [
        {
          icon: <GiRapidshareArrow className="text-[#EF4444]" size={24} />,
          title: "Nerve Repair",
          text: "Enhances synthesis of myelin sheath and accelerates nerve recovery.",
        },
        {
          icon: <FaRunning className="text-[#EF4444]" size={24} />,
          title: "Improved Nerve Conductivity",
          text: "Supports proper transmission of electrical impulses to muscles.",
        },
        {
          icon: <GiBrain className="text-[#EF4444]" size={24} />,
          title: "Reduced Neuropathic Pain",
          text: "Helps reduce burning sensations, numbness, and tingling.",
        },
      ],

      // ===================== DOSAGE =====================
      dosage: [
        {
          icon: <FaTablets className="text-[#9333EA]" size={20} />,
          text: "Take 1 capsule once or twice daily, as directed.",
        },
        {
          icon: <FaUtensils className="text-[#9333EA]" size={20} />,
          text: "Best taken after meals to avoid gastric discomfort.",
        },
        {
          icon: <FaClock className="text-[#9333EA]" size={20} />,
          text: "Recommended course: 8–12 weeks depending on condition.",
        },
      ],

      // ===================== PRECAUTIONS =====================
      precautions: [
        {
          icon: <FaExclamationTriangle className="text-[#F97316]" size={20} />,
          text: "Do not exceed the recommended dose.",
        },
        {
          icon: <GiStomach className="text-[#F97316]" size={20} />,
          text: "May cause mild gastric upset in sensitive individuals.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={20} />,
          text: "Not suitable for children unless prescribed.",
        },
      ],

      // ===================== SIDE EFFECTS =====================
      sideEffects: [
        {
          icon: <GiBubbles className="text-[#DC2626]" size={20} />,
          text: "Rare nausea or abdominal discomfort.",
        },
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={20} />,
          text: "Occasional dizziness due to nerve stimulation.",
        },
      ],

      // ===================== STORAGE =====================
      storage:
        "Store below 25°C in a dry place, away from moisture and direct sunlight.",

      // ===================== PACKAGING =====================
      packaging: "Box of 30 capsules – Lacora Nutrition.",
    },
  },
  {
    id: 21,
    name: "Caldicin",
    type: "Calcium, Vitamin D3 & Vitamin K Formula",
    department: "Bones & Orthopedics",
    category: "Bone Health",
    brand: "Lacora",
    image: "/p21.png",
    isNew: false,

    shortDesc:
      "A complete formula of Calcium, Vitamin D3, and Vitamin K designed to support strong bones, improve calcium absorption, and enhance overall skeletal health.",

    fullDesc: {
      about: [
        {
          icon: <GiStrong className="text-[#0A4B6F]" size={26} />,
          title: "Supports Bone Strength",
          text: "Helps maintain healthy and strong bones by providing the essential minerals needed for bone density.",
        },
        {
          icon: <GiHealthIncrease className="text-[#0A4B6F]" size={26} />,
          title: "Enhanced Calcium Absorption",
          text: "Vitamin D3 boosts the intestinal absorption of calcium improving its utilization in the body.",
        },
        {
          icon: <GiHealing className="text-[#0A4B6F]" size={26} />,
          title: "Improves Calcium Fixation",
          text: "Vitamin K supports the fixation of calcium into bones ensuring optimal bone mineralization.",
        },
        {
          icon: <GiBodyBalance className="text-[#0A4B6F]" size={26} />,
          title: "Balanced Bone Support",
          text: "A scientifically balanced formula combining Calcium, D3 and K2 for maximum skeletal support.",
        },
      ],

      composition: [
        {
          icon: <GiMinerals className="text-[#047857]" size={22} />,
          ingredient: "Calcium Carbonate",
          amount: "600 mg",
        },
        {
          icon: <GiEnergyArrow className="text-[#047857]" size={22} />,
          ingredient: "Vitamin D3",
          amount: "400 IU",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={22} />,
          ingredient: "Vitamin K",
          amount: "90 mcg",
        },
      ],

      mechanism: [
        {
          icon: <GiPlantRoots className="text-[#EF4444]" size={24} />,
          title: "Bone Mineralization",
          text: "Calcium forms the structural matrix of the bone providing firmness and stability.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={24} />,
          title: "Enhanced Fixation",
          text: "Vitamin K activates proteins responsible for anchoring calcium into bone tissues.",
        },
        {
          icon: <GiElectric className="text-[#EF4444]" size={24} />,
          title: "Optimized Absorption",
          text: "Vitamin D3 ensures optimal calcium absorption from the intestine into the bloodstream.",
        },
      ],

      indications: [
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={20} />,
          text: "Weak or brittle bones (osteopenia).",
        },
        {
          icon: <FaRegClock className="text-[#0E7490]" size={20} />,
          text: "Low calcium levels.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={20} />,
          text: "Vitamin D deficiency symptoms.",
        },
        {
          icon: <GiStomach className="text-[#0E7490]" size={20} />,
          text: "Pregnancy bone support.",
        },
        {
          icon: <GiBodyBalance className="text-[#0E7490]" size={20} />,
          text: "Elderly bone health maintenance.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={20} />,
          text: "Take 1 capsule daily after a main meal.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={20} />,
          text: "Swallow with sufficient water.",
        },
        {
          icon: <FaCheckCircle className="text-[#9333EA]" size={20} />,
          text: "Best taken consistently for 3 months for maximum results.",
        },
      ],

      precautions: [
        {
          icon: <FaExclamationTriangle className="text-[#F97316]" size={20} />,
          text: "Avoid exceeding recommended dose.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={20} />,
          text: "Consult a doctor if you have kidney stones.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={20} />,
          text: "Not recommended for children under 12.",
        },
        {
          icon: <FaEye className="text-[#F97316]" size={20} />,
          text: "Use with caution in patients with hypercalcemia.",
        },
      ],

      sideEffects: [
        {
          icon: <GiStomach className="text-[#DC2626]" size={20} />,
          text: "Mild stomach upset (rare).",
        },
        {
          icon: <GiDrop className="text-[#DC2626]" size={20} />,
          text: "Constipation if taken on an empty stomach.",
        },
        {
          icon: <GiBubbles className="text-[#DC2626]" size={20} />,
          text: "Nausea in sensitive individuals.",
        },
      ],

      storage: "Store in a cool, dry place below 25°C away from sunlight.",
      packaging: "Pack of 30 capsules – Lacora Nutrition.",
    },
  },
  {
    id: 22,
    name: "Neurodox",
    type: "Nerve Support & Neuropathy Formula",
    department: "Neurology",
    category: "Nerve Health",
    brand: "Lacora",
    image: "/p22.png",
    isNew: false,

    shortDesc:
      "Advanced nerve support formula designed to relieve neuropathic pain, enhance nerve regeneration, improve brain energy, and provide powerful antioxidant protection.",

    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#0A4B6F]" size={26} />,
          title: "Supports Nerve Function",
          text: "Helps improve nerve conduction and supports overall nerve health.",
        },
        {
          icon: <GiHealing className="text-[#0A4B6F]" size={26} />,
          title: "Nerve Regeneration",
          text: "Enhances nerve repair and regeneration for faster recovery.",
        },
        {
          icon: <GiBubbles className="text-[#0A4B6F]" size={26} />,
          title: "Antioxidant Protection",
          text: "Provides strong antioxidant activity that protects nerves from free radicals.",
        },
        {
          icon: <GiEnergyArrow className="text-[#0A4B6F]" size={26} />,
          title: "Brain Energy Booster",
          text: "Improves mental clarity, focus, and brain energy.",
        },
        {
          icon: <GiBodyBalance className="text-[#0A4B6F]" size={26} />,
          title: "Neuropathic Pain Relief",
          text: "Reduces nerve pain, tingling, burning sensations, and numbness.",
        },
      ],

      composition: [
        {
          icon: <GiMedicines className="text-[#047857]" size={22} />,
          ingredient: "Vitamin B1 (Thiamine)",
          amount: "100 mg",
        },
        {
          icon: <GiMedicines className="text-[#047857]" size={22} />,
          ingredient: "Vitamin B6",
          amount: "50 mg",
        },
        {
          icon: <GiMedicines className="text-[#047857]" size={22} />,
          ingredient: "Vitamin B12 (Methylcobalamin)",
          amount: "1500 mcg",
        },
        {
          icon: <GiLeafSwirl className="text-[#047857]" size={22} />,
          ingredient: "Alpha Lipoic Acid",
          amount: "100 mg",
        },
        {
          icon: <GiStrong className="text-[#047857]" size={22} />,
          ingredient: "Folic Acid",
          amount: "400 mcg",
        },
      ],

      mechanism: [
        {
          icon: <GiBrain className="text-[#EF4444]" size={24} />,
          title: "Improves Nerve Conduction",
          text: "B vitamins enhance nerve signal transmission improving functionality.",
        },
        {
          icon: <GiPlantRoots className="text-[#EF4444]" size={24} />,
          title: "Stimulates Nerve Repair",
          text: "Methylcobalamin directly promotes regeneration of damaged nerves.",
        },
        {
          icon: <GiChemicalDrop className="text-[#EF4444]" size={24} />,
          title: "Powerful Antioxidant Effect",
          text: "Alpha Lipoic Acid neutralizes free radicals and protects nerve tissues.",
        },
      ],

      indications: [
        {
          icon: <GiHeadbandKnot className="text-[#0E7490]" size={20} />,
          text: "Peripheral neuropathy.",
        },
        {
          icon: <FaRegClock className="text-[#0E7490]" size={20} />,
          text: "Nerve pain & numbness.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={20} />,
          text: "Diabetic neuropathy.",
        },
        {
          icon: <GiRunningNinja className="text-[#0E7490]" size={20} />,
          text: "Nerve regeneration support.",
        },
        {
          icon: <GiBrain className="text-[#0E7490]" size={20} />,
          text: "Brain energy & memory support.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={20} />,
          text: "Take 1 capsule once or twice daily after meals.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={20} />,
          text: "Swallow with a full glass of water.",
        },
        {
          icon: <FaCheckCircle className="text-[#9333EA]" size={20} />,
          text: "For best results, use continuously for at least 4–8 weeks.",
        },
      ],

      precautions: [
        {
          icon: <FaExclamationTriangle className="text-[#F97316]" size={20} />,
          text: "Not recommended for patients with severe kidney impairment.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={20} />,
          text: "Consult a doctor during pregnancy or breastfeeding.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={20} />,
          text: "Not suitable for children under 12 years.",
        },
      ],

      sideEffects: [
        {
          icon: <GiStomach className="text-[#DC2626]" size={20} />,
          text: "Mild stomach upset.",
        },
        {
          icon: <GiBubbles className="text-[#DC2626]" size={20} />,
          text: "Dizziness in rare cases.",
        },
        {
          icon: <GiDrop className="text-[#DC2626]" size={20} />,
          text: "Headache if taken without food.",
        },
      ],

      storage: "Store below 25°C in a cool dry place away from sunlight.",
      packaging: "Pack of 30 capsules – Lacora Nutrition.",
    },
  },
  {
    id: 23,
    name: "Becormix-Boost Syrup",
    type: "L-Carnitine, Taurine & B-Complex Syrup",
    department: "Neurology / General Health",
    category: "Energy & Nerve Support",
    brand: "Lacora",
    image: "/p23.png",
    isNew: false,

    shortDesc:
      "A powerful syrup formula containing L-Carnitine, Taurine, Methylcobalamin, and Vitamin B6 to enhance brain activity, boost energy, support nerves, and improve mental performance.",

    fullDesc: {
      about: [
        {
          icon: <GiEnergyArrow className="text-[#0A4B6F]" size={26} />,
          title: "Boosts Energy Levels",
          text: "L-Carnitine enhances cellular energy and reduces fatigue.",
        },
        {
          icon: <GiBrain className="text-[#0A4B6F]" size={26} />,
          title: "Improves Brain Activity",
          text: "Supports better focus, concentration, and cognitive function.",
        },
        {
          icon: <GiHealing className="text-[#0A4B6F]" size={26} />,
          title: "Supports Nerve Health",
          text: "Methylcobalamin and Vitamin B6 improve nerve conduction and repair.",
        },
        {
          icon: <GiBubbles className="text-[#0A4B6F]" size={26} />,
          title: "Enhances Mental Alertness",
          text: "Helps improve mental sharpness and reaction time.",
        },
        {
          icon: <GiRapidshareArrow className="text-[#0A4B6F]" size={26} />,
          title: "Improves Metabolic Efficiency",
          text: "Taurine supports metabolism and muscle function.",
        },
      ],

      composition: [
        {
          icon: <GiMedicines className="text-[#047857]" size={22} />,
          ingredient: "L-Carnitine",
          amount: "1000 mg",
        },
        {
          icon: <GiMedicines className="text-[#047857]" size={22} />,
          ingredient: "Taurine",
          amount: "105 mg",
        },
        {
          icon: <GiMedicines className="text-[#047857]" size={22} />,
          ingredient: "Vitamin B6",
          amount: "1 mg",
        },
        {
          icon: <GiMedicines className="text-[#047857]" size={22} />,
          ingredient: "Vitamin B12 (Methylcobalamin)",
          amount: "2 μg",
        },
      ],

      mechanism: [
        {
          icon: <GiEnergyArrow className="text-[#EF4444]" size={24} />,
          title: "Cellular Energy Boost",
          text: "L-Carnitine transports fatty acids into mitochondria to produce clean energy.",
        },
        {
          icon: <GiBrain className="text-[#EF4444]" size={24} />,
          title: "Neurotransmitter Optimization",
          text: "Vitamin B6 and B12 enhance neurotransmitter synthesis for better nerve signaling.",
        },
        {
          icon: <GiCycle className="text-[#EF4444]" size={24} />,
          title: "Muscle & Metabolic Support",
          text: "Taurine promotes muscular performance, hydration, and metabolic balance.",
        },
      ],

      indications: [
        {
          icon: <FaRegSmile className="text-[#0E7490]" size={20} />,
          text: "Low energy and chronic fatigue.",
        },
        {
          icon: <FaRegClock className="text-[#0E7490]" size={20} />,
          text: "Weak concentration and mental performance.",
        },
        {
          icon: <GiHeadbandKnot className="text-[#0E7490]" size={20} />,
          text: "Nerve weakness and neuropathy.",
        },
        {
          icon: <GiRunningNinja className="text-[#0E7490]" size={20} />,
          text: "Athletic performance support.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={20} />,
          text: "General body weakness.",
        },
      ],

      dosage: [
        {
          icon: <FaUtensils className="text-[#9333EA]" size={20} />,
          text: "Adults: 5 ml once daily or as prescribed by a physician.",
        },
        {
          icon: <FaHandHoldingWater className="text-[#9333EA]" size={20} />,
          text: "Take with or after meals.",
        },
        {
          icon: <FaCheckCircle className="text-[#9333EA]" size={20} />,
          text: "Shake well before use.",
        },
      ],

      precautions: [
        {
          icon: <FaExclamationTriangle className="text-[#F97316]" size={20} />,
          text: "Keep out of reach of children.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={20} />,
          text: "Consult your doctor before use during pregnancy or breastfeeding.",
        },
        {
          icon: <GiStomach className="text-[#F97316]" size={20} />,
          text: "May cause mild stomach discomfort if taken on an empty stomach.",
        },
      ],

      sideEffects: [
        {
          icon: <GiBubbles className="text-[#DC2626]" size={20} />,
          text: "Mild nausea.",
        },
        {
          icon: <GiStomach className="text-[#DC2626]" size={20} />,
          text: "Digestive upset if overdosed.",
        },
        {
          icon: <FaRegSmile className="text-[#DC2626]" size={20} />,
          text: "Rare headache.",
        },
      ],

      storage:
        "Store in a dry place at a temperature below 30°C away from direct sunlight.",
      packaging: "Bottle of 150 ml – Lacora Nutrition.",
    },
  },
  {
    id: 24, // غيّره للرقم اللي يناسب ترتيبك
    name: "DAYTRIX",
    type: "Lyophilized Ceftriaxone",
    department: "Antibiotics",
    category: "Antibacterial",
    brand: "CT Italy",

    image: "/p24.png", // غيّرها حسب اسم الصورة عندك

    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Third-generation cephalosporin antibiotic in lyophilized form, providing high stability, strong antibacterial coverage, and improved patient tolerance.",

    fullDesc: {
      about: [
        {
          icon: <GiMedicines className="text-[#0A506F]" size={26} />,
          title: "Broad-Spectrum Coverage",
          text: "Effective against Gram-positive and Gram-negative bacterial infections in multiple clinical conditions.",
        },
        {
          icon: <GiShield className="text-[#0A506F]" size={26} />,
          title: "Once-Daily Dose",
          text: "Long half-life provides convenient once-daily administration, improving patient compliance.",
        },
        {
          icon: <GiHealthIncrease className="text-[#0A506F]" size={26} />,
          title: "Excellent Tissue Penetration",
          text: "High penetrative ability including CSF, suitable for meningitis and severe infections.",
        },
        {
          icon: <GiLightningDissipation className="text-[#0A506F]" size={26} />,
          title: "Reduced Resistance Rates",
          text: "Lower resistance profile compared to older antibiotics, maintaining high clinical effectiveness.",
        },
      ],

      composition: [
        {
          icon: <GiChemicalDrop className="text-[#047857]" size={22} />,
          ingredient: "Ceftriaxone",
          amount: "1000 mg (Lyophilized powder)",
        },
      ],

      mechanism: [
        {
          icon: <GiCycle className="text-[#EF4444]" size={24} />,
          title: "Cell Wall Inhibition",
          text: "Blocks bacterial cell-wall synthesis, leading to rapid bactericidal action.",
        },
        {
          icon: <GiEnergyArrow className="text-[#EF4444]" size={24} />,
          title: "Sustained Release",
          text: "Long half-life ensures stable therapeutic concentration over 24 hours.",
        },
      ],

      indications: [
        {
          icon: <GiStomach className="text-[#0E7490]" size={22} />,
          text: "Community-acquired pneumonia",
        },
        {
          icon: <GiKidneys className="text-[#0E7490]" size={22} />,
          text: "Urinary tract infections",
        },
        {
          icon: <GiBrain className="text-[#0E7490]" size={22} />,
          text: "Bacterial meningitis",
        },
        {
          icon: <GiStrong className="text-[#0E7490]" size={22} />,
          text: "Skin and soft tissue infections",
        },
        {
          icon: <GiCycle className="text-[#0E7490]" size={22} />,
          text: "Intra-abdominal infections",
        },
      ],

      dosage: [
        {
          icon: <FaSyringe className="text-[#9333EA]" size={22} />,
          text: "Administered via IM or IV route depending on the condition.",
        },
        {
          icon: <FaClock className="text-[#9333EA]" size={22} />,
          text: "Once daily in most clinical cases due to long half-life.",
        },
        {
          icon: <FaCheckCircle className="text-[#9333EA]" size={22} />,
          text: "Reconstitute using sterile water or appropriate diluent before injection.",
        },
      ],

      precautions: [
        {
          icon: <FaExclamationTriangle className="text-[#F97316]" size={22} />,
          text: "Avoid in patients with known cephalosporin allergy.",
        },
        {
          icon: <FaBaby className="text-[#F97316]" size={22} />,
          text: "Use under supervision in neonates with hyperbilirubinemia.",
        },
        {
          icon: <FaTint className="text-[#F97316]" size={22} />,
          text: "Monitor renal and hepatic function in long-term use.",
        },
      ],

      sideEffects: [
        {
          icon: <GiChemicalDrop className="text-[#DC2626]" size={22} />,
          text: "Mild gastrointestinal upset.",
        },
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Local pain at injection site (significantly reduced due to lyophilized form).",
        },
        {
          icon: <GiMedicines className="text-[#DC2626]" size={22} />,
          text: "Rare hypersensitivity reactions in allergic patients.",
        },
      ],

      storage:
        "Store at room temperature in a dry place. Lyophilized form eliminates the need for refrigeration.",

      packaging:
        "Sterile vial containing lyophilized Ceftriaxone powder for injection.",
    },
  },
  {
    id: 25,
    name: "Sciomer",
    type: "Intramuscular Muscle Relaxant Ampoule",
    department: "Orthopedics & Neurology",
    category: "Muscle Relaxant",
    brand: "CT Italy",
    image: "/p25.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "Fast-acting, centrally acting muscle relaxant containing Thiocolchicoside 4mg/2ml for acute painful muscle spasms with minimal sedation.",

    fullDesc: {
      about: [
        {
          icon: <GiStrong className="text-[#0A506F]" size={26} />,
          title: "Powerful Muscle Relaxation",
          text: "Provides rapid relief for acute moderate-to-severe muscle spasms in orthopedic and neurological cases.",
        },
        {
          icon: <GiBrain className="text-[#0A506F]" size={26} />,
          title: "Centrally Acting Mechanism",
          text: "Acts directly on the central nervous system to decrease excessive neuronal excitability.",
        },
        {
          icon: <GiMedicines className="text-[#0A506F]" size={26} />,
          title: "Clinically Trusted Molecule",
          text: "Thiocolchicoside is a semi-synthetic derivative of colchicine with proven efficacy for spasm control.",
        },
        {
          icon: <GiRunningNinja className="text-[#0A506F]" size={26} />,
          title: "Minimal Sedation",
          text: "Relaxes muscles without causing heavy drowsiness, making it suitable for active patients.",
        },
      ],

      composition: [
        {
          icon: <GiChemicalDrop className="text-[#047857]" size={24} />,
          ingredient: "Thiocolchicoside",
          amount: "4 mg / 2 ml IM ampoule",
        },
        {
          icon: <GiWaterDrop className="text-[#047857]" size={24} />,
          ingredient: "Solution Base",
          amount: "Sterile IM formulation",
        },
      ],

      mechanism: [
        {
          icon: <GiBrain className="text-[#EF4444]" size={26} />,
          title: "Selective GABA-A Modulation",
          text: "Enhances inhibitory neurotransmission to suppress excessive neuronal firing in the spinal cord.",
        },
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Spinal & CNS Relaxation",
          text: "Targets paravertebral muscle hyperactivity without strong CNS depression.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={26} />,
          title: "No GABA-B Interaction",
          text: "Avoids side effects associated with Baclofen-like agents, keeping sedation minimal.",
        },
      ],

      indications: [
        {
          icon: <FaRegClock className="text-[#0E7490]" size={22} />,
          text: "Acute low back pain (lumbago).",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Cervical spasm / torticollis.",
        },
        {
          icon: <GiRunningNinja className="text-[#0E7490]" size={22} />,
          text: "Sciatica & radicular pain.",
        },
        {
          icon: <GiHeadbandKnot className="text-[#0E7490]" size={22} />,
          text: "Muscle contracture after trauma or injury.",
        },
        {
          icon: <GiStrong className="text-[#0E7490]" size={22} />,
          text: "Paravertebral & spinal spasms.",
        },
      ],

      dosage: [
        {
          icon: <FaSyringe className="text-[#9333EA]" size={22} />,
          text: "4 mg deep intramuscular injection once or twice daily.",
        },
        {
          icon: <FaClock className="text-[#9333EA]" size={22} />,
          text: "Maximum duration: 5 days only (according to EMA).",
        },
        {
          icon: <FaExclamationTriangle className="text-[#9333EA]" size={22} />,
          text: "Never administer IV — IM route only.",
        },
      ],

      precautions: [
        {
          icon: <FaBaby className="text-[#F97316]" size={22} />,
          text: "Contraindicated during pregnancy and breastfeeding.",
        },
        {
          icon: <FaEye className="text-[#F97316]" size={22} />,
          text: "Women of childbearing age must use contraception.",
        },
        {
          icon: <GiLightningDissipation className="text-[#F97316]" size={22} />,
          text: "Avoid in seizure-prone patients.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Avoid prolonged use due to risk of genotoxicity.",
        },
      ],

      sideEffects: [
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Mild gastric discomfort.",
        },
        {
          icon: <FaRegSmile className="text-[#DC2626]" size={22} />,
          text: "Rare mild sedation.",
        },
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Dizziness (uncommon).",
        },
      ],

      storage: "Store below 25°C in a dry place away from direct sunlight.",
      packaging: "Box containing IM ampoules: 4 mg / 2 ml.",
    },
  },
  {
    id: 26,
    name: "Gerolin",
    type: "Neuroprotective IM/IV Injectable Solution",
    department: "Neurology & Emergency Medicine",
    category: "Neuroprotective",
    brand: "CT Italy",
    image: "/p26.png",
    isNew: false,
    origin: "Italy",
    distributionType: "Distributor",
    shortDesc:
      "High-potency Citicoline 500mg/4ml IM–IV injectable solution for stroke recovery, cognitive decline, traumatic brain injury, and neuroprotection.",

    fullDesc: {
      about: [
        {
          icon: <GiBrain className="text-[#0A506F]" size={26} />,
          title: "Powerful Neuroprotection",
          text: "Enhances neuronal membrane repair and supports faster neurological recovery in stroke and trauma.",
        },
        {
          icon: <GiElectric className="text-[#0A506F]" size={26} />,
          title: "Boosts Brain Energy",
          text: "Improves cerebral metabolism and increases ATP availability for optimal neuronal function.",
        },
        {
          icon: <GiHealing className="text-[#0A506F]" size={26} />,
          title: "Enhances Cognitive Functions",
          text: "Improves memory, focus, mental clarity, and attention in cognitive impairment cases.",
        },
        {
          icon: <GiStrong className="text-[#0A506F]" size={26} />,
          title: "Supports Neuronal Repair",
          text: "Stimulates phospholipid synthesis crucial for regenerating damaged neurons.",
        },
      ],

      composition: [
        {
          icon: <FaTablets className="text-[#047857]" size={24} />,
          ingredient: "Citicoline Sodium",
          amount: "500 mg / 4 ml",
        },
        {
          icon: <GiWaterDrop className="text-[#047857]" size={24} />,
          ingredient: "Sterile Solution",
          amount: "IM / IV Pharmaceutical Grade",
        },
      ],

      mechanism: [
        {
          icon: <GiBrain className="text-[#EF4444]" size={26} />,
          title: "Boosts Acetylcholine Levels",
          text: "Provides choline substrate for acetylcholine synthesis, enhancing cognition and memory pathways.",
        },
        {
          icon: <GiElectric className="text-[#EF4444]" size={26} />,
          title: "Restores Neuronal Membranes",
          text: "Stimulates phosphatidylcholine production aiding neuron membrane regeneration.",
        },
        {
          icon: <GiHeartPlus className="text-[#EF4444]" size={26} />,
          title: "Improves Cerebral Blood Flow",
          text: "Enhances microcirculation and oxygen delivery to ischemic brain tissues.",
        },
      ],

      indications: [
        {
          icon: <FaRegClock className="text-[#0E7490]" size={22} />,
          text: "Ischemic stroke recovery.",
        },
        {
          icon: <FaHeartbeat className="text-[#0E7490]" size={22} />,
          text: "Traumatic brain injury (TBI).",
        },
        {
          icon: <GiBrain className="text-[#0E7490]" size={22} />,
          text: "Vascular dementia & cognitive impairment.",
        },
        {
          icon: <GiRunningNinja className="text-[#0E7490]" size={22} />,
          text: "Neurodegenerative disorders.",
        },
        {
          icon: <GiHeadbandKnot className="text-[#0E7490]" size={22} />,
          text: "Attention & memory deficits.",
        },
      ],

      dosage: [
        {
          icon: <FaSyringe className="text-[#9333EA]" size={22} />,
          text: "500–1000 mg daily IM or slow IV injection depending on severity.",
        },
        {
          icon: <FaClock className="text-[#9333EA]" size={22} />,
          text: "Treatment duration: 7–30 days based on neurological condition.",
        },
        {
          icon: <FaExclamationTriangle className="text-[#9333EA]" size={22} />,
          text: "Administer slowly to avoid blood pressure fluctuations.",
        },
      ],

      precautions: [
        {
          icon: <FaBaby className="text-[#F97316]" size={22} />,
          text: "Not recommended during pregnancy and breastfeeding.",
        },
        {
          icon: <FaEye className="text-[#F97316]" size={22} />,
          text: "Use with caution in patients with severe hypotension.",
        },
        {
          icon: <GiLightningDissipation className="text-[#F97316]" size={22} />,
          text: "Monitor for restlessness in hyperexcitable patients.",
        },
        {
          icon: <FaLeaf className="text-[#F97316]" size={22} />,
          text: "Avoid excessive doses in elderly cognitive disorder patients.",
        },
      ],

      sideEffects: [
        {
          icon: <GiStomach className="text-[#DC2626]" size={22} />,
          text: "Mild GI discomfort or nausea (rare).",
        },
        {
          icon: <FaRegSmile className="text-[#DC2626]" size={22} />,
          text: "Occasional restlessness or headache.",
        },
        {
          icon: <GiBodyBalance className="text-[#DC2626]" size={22} />,
          text: "Dizziness (uncommon).",
        },
      ],

      storage: "Store below 25°C in a dry place away from light.",
      packaging:
        "Box containing 5 ampoules, each 4 ml IM/IV solution (500 mg).",
    },
  },
];

export const emptyBrands = [
  {
    brand: "Viovera",
    comingSoon: true,
    message: "Products from Viovera are being added soon.",
  },
  {
    brand: "INDUSEN Spain",
    comingSoon: true,
    message: "High-quality Spanish pharmaceuticals are coming soon.",
  },
  {
    brand: "Distarz Health UK",
    comingSoon: true,
    message: "UK-made healthcare products are arriving soon.",
  },
];
