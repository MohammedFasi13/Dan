import React from 'react';
import styled from 'styled-components';

// --- Color Palette and Constants ---
const PRIMARY_COLOR = '#46B724';
const SECONDARY_COLOR = '#000000'; // Black
const LIGHT_BACKGROUND = '#F9F9F9'; // Very light gray for subtle contrast
const BORDER_COLOR = '#E0E0E0'; // Light border color

// --- Utility Components for Styling (Updated for Professional Look) ---

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  padding: 100px 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif; /* Clean, professional font stack */
  color: ${SECONDARY_COLOR};
  background-color: #FFFFFF; 
`;

const SectionTitle = styled.h2`
  color: ${SECONDARY_COLOR}; 
  margin-top: 40px;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 3px solid ${PRIMARY_COLOR}; /* Strong primary green accent line */
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SubSectionTitle = styled.h3`
  color: ${SECONDARY_COLOR};
  font-size: 1.25rem;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: 600;
  border-left: 4px solid ${PRIMARY_COLOR}; /* Primary green bar for visual guide */
  padding-left: 10px;
`;

const CategoryBox = styled.div`
  background-color: ${LIGHT_BACKGROUND}; /* Subtle light gray background */
  padding: 30px;
  border-radius: 8px; /* Slightly softer corners */
  margin-bottom: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Soft shadow for depth */
  border: 1px solid ${BORDER_COLOR};
`;

const List = styled.ul`
  list-style: disc;
  margin-left: 20px;
  padding-left: 0;
  columns: 2; /* Column layout for better readability on long lists */
  color: #333; /* Slightly softer text for role lists */
  line-height: 1.6;
  @media (max-width: 768px) {
    columns: 1;
  }
`;

const CertificationList = styled.ul`
    list-style: none;
    padding: 0;
    li {
        background: #e9f5e9; /* Very light green background */
        color: ${SECONDARY_COLOR};
        padding: 10px 15px;
        margin-bottom: 8px;
        border-radius: 4px;
        border-left: 5px solid ${PRIMARY_COLOR}; /* Strong primary green highlight */
        font-weight: 500;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
`;


// --- Global Talent Pool Component (Logic Unchanged) ---

const GlobalTalentPool = () => {
    // Data has been structured and client/social media info excluded.

    const talentData = {
        intro: "Meet our Global Talent Pool — a benchmark-driven workforce ecosystem designed to power every industry and project. At DAN International Solutions, we deliver certified and approved professionals trusted by the world’s leading operators, EPC contractors, and government entities. Our workforce is equipped with globally recognized certifications and approvals, ensuring compliance, safety, and performance across all projects.",
        
        whyChoose: [
            "Globally Approved & Certified",
            "Budget-Aligned & Project-Based",
            "Nationalization Ready (Saudization, Qatarization, Emiratization, Omanization, etc.)",
            "Labor Law & Compliance Driven",
            "Mobilization-Ready with Medicals & Approvals",
            "Customizable to Scope, Services & Internal Policies"
        ],
        
        certifications: [
            {
                title: "Oil & Gas / EPC / Petrochemical / Refineries",
                approvals: [
                    "Project Standards: EPCM Approvals, International Engineering Approvals"
                ],
                certifications: [
                    "API (American Petroleum Institute)",
                    "ASME (American Society of Mechanical Engineers)",
                    "NACE (Corrosion / Coating)",
                    "CSWIP, AWS-CWI (Welding Inspection)",
                    "OGUK / Offshore Medical",
                    "H2S Awareness / HSE Training",
                    "NEBOSH / IOSH (Safety)",
                    "LEEA (Lifting Engineering & Equipment)"
                ]
            },
            {
                title: "Engineering, Construction & Heavy Industries",
                certifications: [
                    "ISO 9001 / 14001 / 45001",
                    "PMP / PMI Certified Professionals",
                    "Primavera (Planning & Scheduling) Certified",
                    "AACE Cost Engineering Certification",
                    "Chartered Engineers (CEng)",
                    "BIM (Building Information Modeling) Certification",
                    "OSHA Standards"
                ]
            },
            {
                title: "Mining & Metals",
                certifications: [
                    "Mining Safety & Health Administration (MSHA)",
                    "ICMM Safety Standards",
                    "Explosives Handling Certification",
                    "ISO 14001 (Environmental)",
                    "Mine Rescue Certification"
                ]
            },
            {
                title: "Renewable Energy & Sustainability",
                certifications: [
                    "GWO (Global Wind Organization) Safety & Technical Training",
                    "IOSH Environmental Management",
                    "ISO 50001 (Energy Management Systems)",
                    "LEED / BREEAM (Green Building Certifications)",
                    "PV Solar Certification (NABCEP)",
                    "Hydrogen Safety Certification"
                ]
            },
            {
                title: "Marine / Offshore / Shipbuilding",
                certifications: [
                    "STCW (Standards of Training, Certification & Watchkeeping)",
                    "IMO Certifications",
                    "Offshore Survival (BOSIET, HUET, FOET)",
                    "Marine Engineer Officer Certifications (Class I & II)",
                    "DNV / ABS / Lloyd’s Register Approvals",
                    "ROV Operator Certifications",
                    "ISPS Code Training"
                ]
            },
            {
                title: "Aviation & Aerospace",
                certifications: [
                    "ICAO Compliance",
                    "IATA Certifications",
                    "FAA / EASA Licensed Engineers",
                    "AME (Aircraft Maintenance Engineer License)",
                    "ATPL (Airline Transport Pilot License)",
                    "Safety Management Systems (SMS)"
                ]
            },
            {
                title: "IT & Telecommunications",
                certifications: [
                    "Cisco (CCNA, CCNP, CCIE)",
                    "Microsoft (Azure, Dynamics, M365)",
                    "AWS, Google Cloud, Oracle Cloud",
                    "CompTIA Security+, CISSP, CISM, CEH (Cybersecurity)",
                    "PMP Agile, Scrum, DevOps Certifications",
                    "5G / Fiber Optic Installation & Testing Certifications"
                ]
            },
            {
                title: "Healthcare & Pharmaceuticals",
                certifications: [
                    "DHA / MOH / HAAD / SCFHS (GCC Health Authority Licenses)",
                    "GMC (UK), USMLE (USA), ECFMG Certifications",
                    "BLS, ACLS, ATLS (Emergency Response)",
                    "GCP (Good Clinical Practice)",
                    "GMP (Good Manufacturing Practice)",
                    "ISO 13485 (Medical Devices)",
                    "Pharmacovigilance Certifications"
                ]
            },
            {
                title: "Education",
                certifications: [
                    "Ministry of Education Approvals (GCC, International)",
                    "TEFL, TESOL, CELTA (English Teaching)",
                    "IB / Cambridge / American Curriculum Certified Teachers",
                    "Montessori / Early Childhood Education Certifications"
                ]
            },
            {
                title: "Hospitality, Food & Beverages, Retail",
                certifications: [
                    "HACCP / ISO 22000 (Food Safety)",
                    "ServSafe Certification",
                    "Barista / Culinary Certifications (International Standards)",
                    "CTH / AHLEI (Hospitality Management)",
                    "Retail Management Certifications"
                ]
            },
            {
                title: "Defense & Security",
                certifications: [
                    "Military Security Clearance (NATO, GCC, US DoD)",
                    "Firearms Handling / Armorer Certifications",
                    "Explosive Ordnance Disposal (EOD) Certification",
                    "Cybersecurity Defense Certifications",
                    "International Maritime Security Certifications"
                ]
            }
        ],
        
        industryProfessionals: {
            "Oil & Gas Professionals": {
                "Offshore Oil & Gas Professionals": {
                    "Drilling & Well Services": [
                        "Drilling Engineers", "Toolpushers", "Drillers / Assistant Drillers", "Derrickmen", "Roughnecks / Roustabouts", "Wellhead Operators", "Mud Engineers / Mud Loggers", "Cementing Specialists", "Wireline / Logging Engineers"
                    ],
                    "Marine & Deck Crew": [
                        "Offshore Installation Manager (OIM)", "Barge Engineer / Barge Supervisor", "Ballast Control Operator", "Marine Engineer / Motorman", "Deck Pusher / Deck Foreman", "Crane Operators", "Riggers (Level I, II, III)", "Able Seamen (AB)", "Ordinary Seamen (OS)", "Helideck Assistants"
                    ],
                    "Subsea & Diving": [
                        "Subsea Engineers", "ROV (Remotely Operated Vehicle) Pilots / Supervisors", "Diving Supervisors", "Commercial Divers (Air / Saturation)", "Subsea Technicians (Umbilicals, Risers, Flowlines)", "Surveyors (Hydrographic, Positioning, Geophysical)"
                    ],
                    "Production & Operations": [
                        "Production Supervisors", "Control Room Operators (DCS, SCADA)", "Process Technicians", "Offshore Production Operators", "Well Test Operators", "Mechanical Technicians (Static / Rotating)", "Electrical Technicians", "Instrument Technicians", "HVAC Technicians"
                    ],
                    "Maintenance & Integrity": [
                        "Maintenance Supervisors (Mechanical, Electrical, Instrument)", "Reliability Engineers", "Asset Integrity Engineers", "Corrosion Engineers / Inspectors", "NDT Technicians (UT, RT, MT, PT, VT)", "Rope Access Technicians (IRATA Certified)"
                    ],
                    "HSE & Emergency Response": [
                        "HSE Manager / HSE Officer (Offshore Certified)", "Safety Engineers / Safety Supervisors", "Medic / Paramedic (Offshore)", "Firefighters / Fire & Gas Technicians", "Lifeboat Coxswains"
                    ],
                    "Catering & Welfare": [
                        "Camp Boss (Offshore)", "Chief Cook / Assistant Cook", "Stewards / Utility Hands", "Laundrymen"
                    ]
                },
                "Oil & Gas Engineering Team Professionals": {
                    "Process & Chemical Engineering": [
                        "Process Engineers (Oil & Gas, Refinery, LNG, Gas Processing)", "Chemical Engineers", "Simulation Engineers (HYSYS, Aspen, PRO/II)", "Flow Assurance Engineers", "Energy Efficiency Engineers"
                    ],
                    "Mechanical Engineering": [
                        "Mechanical Engineers (Static & Rotating Equipment)", "Rotating Equipment Engineers (Compressors, Pumps, Turbines)", "Package Engineers (Pumps, Compressors, HVAC, Utility Skids)", "Pressure Vessel Engineers", "HVAC Engineers (Industrial & Offshore)"
                    ],
                    "Piping & Pipeline Engineering": [
                        "Piping Engineers", "Stress Engineers (Caesar II)", "Pipeline Engineers (Onshore / Offshore)", "Pipeline Integrity Engineers", "Draftsmen / Designers (PDS, PDMS, SP3D, AutoCAD)"
                    ],
                    "Civil & Structural Engineering": [
                        "Civil Engineers (Infrastructure, Foundations)", "Structural Engineers (Onshore Plants, Offshore Platforms)", "Offshore Structural Engineers (Jackets, Topsides, FPSO Modules)", "Geotechnical Engineers", "Draftsmen / Designers (Civil/Structural CAD/BIM)"
                    ],
                    "Electrical Engineering": [
                        "Electrical Engineers (HV, MV, LV Systems)", "Power Systems Engineers (Generation & Distribution)", "Substation Engineers", "Electrical Design Engineers (ETAP, EPLAN)", "Lighting & Earthing Specialists"
                    ],
                    "Instrumentation & Control": [
                        "Instrumentation Engineers", "Control System Engineers (DCS, ESD, F&G, PLC, SCADA)", "Automation Engineers", "Metering Engineers", "Analyzer Engineers"
                    ],
                    "Subsea & Offshore Engineering": [
                        "Subsea Engineers (Risers, Umbilicals, Flowlines)", "Naval Architects", "Offshore Pipeline Engineers", "Mooring & Installation Engineers", "Hydrodynamics Specialists"
                    ],
                    "Project Engineering & EPCM Support": [
                        "Project Engineers", "Lead Engineers (All Disciplines)", "Interface Engineers", "Engineering Managers", "Technical Safety Engineers", "Reliability & Integrity Engineers"
                    ]
                },
                "Oil & Gas Procurement & Supply Chain Professionals": {
                    "Procurement & Sourcing": [
                        "Procurement Managers", "Procurement Engineers (Mechanical, Electrical, Instrumentation, Civil, Piping)", "Buyers / Senior Buyers", "Strategic Sourcing Specialists", "Category Managers (Equipment, Services, Materials)", "Vendor Development Specialists"
                    ],
                    "Contracts & Commercial": [
                        "Contracts Managers", "Contract Engineers", "Tendering & Bidding Specialists", "Estimation Engineers (Costing & Pricing)", "Commercial Managers", "Subcontract Administrators"
                    ],
                    "Expediting & Inspection": [
                        "Expeditors (Local & International)", "Supplier Quality Surveillance (SQS) Engineers", "Third-Party Inspectors (Mechanical, Electrical, Welding, Coating, NDT)", "Vendor Coordinators"
                    ],
                    "Materials & Logistics": [
                        "Materials Managers", "Material Controllers", "Inventory Analysts", "Logistics & Shipping Coordinators", "Freight Forwarding Specialists", "Customs Clearance Officers", "Import/Export Documentation Specialists"
                    ],
                    "Warehouse & Supply Base": [
                        "Warehouse Managers / Supervisors", "Storekeepers", "Yard Supervisors (Onshore/Offshore Supply Base)", "Tool Crib Attendants", "Forklift / Heavy Equipment Operators"
                    ]
                },
                "Oil & Gas Construction Team Professionals": {
                    "Management & Leadership": [
                        "Construction Director", "Construction Manager", "Site Manager / Site Superintendent", "Resident Engineer (RE)", "Interface Coordinator"
                    ],
                    "Discipline Construction Engineers": [
                        "Civil Construction Engineers", "Structural Engineers (Onshore / Offshore Modules, Steel Structures)", "Mechanical Construction Engineers (Static, Rotating, Piping, Equipment)", "Electrical Construction Engineers", "Instrumentation & Control Engineers", "HVAC Construction Engineers", "Welding Engineers"
                    ],
                    "Supervisors & Foremen": [
                        "Civil Supervisors / Foremen (Earthworks, Concrete, Finishing)", "Structural Supervisors (Steel Erection, Offshore Jackets/Topsides)", "Mechanical Supervisors (Static, Rotating, Piping)", "Piping Supervisors / Foremen", "Electrical Supervisors / Foremen", "Instrument Supervisors / Foremen", "Scaffolding Supervisors", "Rigging Supervisors", "Painting & Coating Supervisors"
                    ],
                    "Skilled Workforce (Construction Trades)": [
                        "Welders (TIG, MIG, Arc, Structural, Offshore Certified)", "Fabricators (Pipe, Structural)", "Pipe Fitters", "Steel Erectors / Riggers", "Scaffolders", "Electricians", "Instrument Fitters", "HVAC Technicians", "Insulators (Hot/Cold)", "Painters / Blasters"
                    ],
                    "Project Control at Site": [
                        "Planning Engineers (Primavera, MS Project)", "Site Planners", "Cost Control Engineers", "Quantity Surveyors", "Field Engineers"
                    ],
                    "Quality & Safety in Construction": [
                        "QA/QC Engineers (Civil, Mechanical, Electrical, Instrument)", "Welding Inspectors (CSWIP, AWS, ASNT)", "NDT Technicians (UT, RT, MT, PT)", "Painting & Coating Inspectors", "HSE Officers / HSE Supervisors (Construction Certified)"
                    ]
                }
            },
            "Petrochemical Industry Professionals": {
                "Executive & Leadership": [
                    "Plant Manager / General Manager", "Operations Director / VP", "Technical Director / Engineering Manager", "HSE Director", "Project Director (EPC/EPCM Projects)", "Production Director", "Maintenance Director"
                ],
                "Process Engineering & Operations": [
                    "Process Engineers (Petrochemical, Polymer, Specialty Chemicals)", "Production Engineers", "Shift Supervisors / Operations Supervisors", "Plant Operators (Reactor, Distillation, Cracker Units)", "Chemical Engineers", "Batch / Continuous Process Operators", "Utilities & Offsite Engineers", "Process Control Engineers (DCS/SCADA)"
                ],
                "Maintenance & Reliability": [
                    "Mechanical Engineers (Rotating & Static Equipment)", "Electrical Engineers", "Instrumentation & Control Engineers", "Reliability / Maintenance Engineers", "Maintenance Planners / Schedulers", "Welding & Fabrication Specialists", "Turnaround / Shutdown Supervisors", "Rotating Equipment Technicians"
                ],
                "Health, Safety & Environment": [
                    "HSE Officers / Coordinators", "Safety Auditors / Inspectors", "Environmental Engineers / Specialists", "Industrial Hygienists", "Fire & Safety Officers", "Emergency Response Team Members", "Permit to Work (PTW) Coordinators"
                ],
                "Laboratory & Quality Control": [
                    "QA/QC Chemists", "Analytical Chemists", "Laboratory Technicians", "Polymer Testing Specialists", "Process Sampling & Lab Analysts", "Instrument Calibration Technicians"
                ],
                "Project Engineering & EPCM": [
                    "Project Engineers (Mechanical, Electrical, Instrumentation, Piping)", "Piping / Mechanical / Civil / Structural Engineers", "CAD / AutoCAD / PDMS / SmartPlant Designers", "Commissioning / Start-up Engineers", "Project Coordinators", "Construction Supervisors", "QA/QC Inspectors (Mechanical, Welding, NDT)"
                ],
                "Procurement & Supply Chain": [
                    "Procurement Officers (Raw Materials, Chemicals, Spares)", "Contracts & Commercial Specialists", "Logistics Coordinators", "Warehouse Supervisors", "Vendor Relationship Managers", "Material Planners / Expeditors"
                ],
                "Technical Support & IT": [
                    "Plant Automation Engineers (DCS, SCADA, PLCs)", "IT Support (ERP, CMMS Systems)", "Instrumentation Calibration Specialists", "Control Room Operators / Process Operators"
                ],
                "Specialized / Niche Roles": [
                    "Polymer Process Specialists", "Catalyst / Chemical Reaction Specialists", "Petrochemical Process Simulation Engineers", "Corrosion & Coating Engineers", "Energy Efficiency & Utilities Engineers", "Petrochemical Project Economists / Analysts"
                ]
            },
            "Refinery Industry Professionals": {
                "Executive & Leadership": [
                    "Refinery General Manager / Plant Manager", "Operations Director / VP", "Technical Director / Engineering Manager", "HSE Director", "Project Director (EPC/EPCM Refinery Projects)", "Production Director", "Maintenance Director"
                ],
                "Process Engineering & Operations": [
                    "Process Engineers (Crude Distillation, Hydrocracking, FCC, Hydrogen Units, Catalytic Reforming)", "Production Engineers", "Shift Supervisors / Operations Supervisors", "Plant Operators (CDU, VDU, Hydrocracker, Hydrotreater, FCC Units)", "Chemical Engineers", "Utilities & Offsite Engineers", "Process Control Engineers (DCS/SCADA)", "Control Room Operators"
                ],
                "Maintenance & Reliability": [
                    "Mechanical Engineers (Rotating & Static Equipment)", "Electrical Engineers", "Instrumentation & Control Engineers", "Reliability / Maintenance Engineers", "Maintenance Planners / Schedulers", "Welding & Fabrication Specialists", "Turnaround / Shutdown Supervisors", "Rotating Equipment Technicians"
                ],
                "Health, Safety & Environment": [
                    "HSE Officers / Coordinators", "Safety Auditors / Inspectors", "Environmental Engineers / Specialists", "Industrial Hygienists", "Fire & Safety Officers", "Emergency Response Team Members", "Permit to Work (PTW) Coordinators"
                ],
                "Laboratory & Quality Control": [
                    "QA/QC Chemists", "Analytical Chemists", "Laboratory Technicians", "Product Testing Specialists (Petrochemical, Fuel, Lubricants)", "Instrument Calibration Technicians", "Process Sampling & Lab Analysts"
                ],
                "Project Engineering & EPCM": [
                    "Project Engineers (Mechanical, Electrical, Instrumentation, Piping, Civil)", "Piping / Mechanical / Civil / Structural Engineers", "CAD / AutoCAD / PDMS / SmartPlant Designers", "Commissioning / Start-up Engineers", "Construction Supervisors", "QA/QC Inspectors (Mechanical, Welding, NDT)", "Turnaround & Shutdown Project Coordinators"
                ],
                "Utilities & Support Systems": [
                    "Steam & Power Generation Engineers", "Water Treatment / Wastewater Engineers", "HVAC & Utilities Engineers", "Refrigeration / Cryogenic Specialists", "Industrial Gas Engineers (Hydrogen, Nitrogen, Oxygen)"
                ],
                "Procurement & Supply Chain": [
                    "Procurement Officers (Materials, Chemicals, Spares)", "Contracts & Commercial Specialists", "Logistics Coordinators", "Warehouse Supervisors", "Vendor Relationship Managers", "Material Planners / Expeditors"
                ],
                "Specialized / Niche Roles": [
                    "Catalyst Handling & Optimization Specialists", "Process Simulation Engineers", "Corrosion & Coating Engineers", "Energy Efficiency & Utilities Engineers", "Refinery Economists / Cost Analysts", "Turnaround & Shutdown Planning Specialists"
                ]
            },
            "Mining Industry Professionals": {
                "Exploration & Geosciences": [
                    "Geologists (Exploration, Structural, Economic, Petrology)", "Geophysicists", "Hydrogeologists", "Mine Surveyors", "GIS Specialists", "Core Logging Geologists", "Drilling & Blasting Engineers"
                ],
                "Mine Engineering & Planning": [
                    "Mining Engineers (Underground / Open Pit)", "Mine Planning Engineers", "Ventilation Engineers", "Rock Mechanics Engineers", "Geotechnical Engineers", "Drill & Blast Engineers", "Mine Survey Engineers"
                ],
                "Operations & Production": [
                    "Mine Supervisors / Foremen", "Pit Supervisors (Open Pit)", "Underground Mine Supervisors", "Production Operators (Loaders, Haul Trucks, Dozers, Excavators)", "Crushing & Screening Plant Operators", "Heavy Equipment Operators (Dragline, Shovel, Drill Rigs)", "Shift Supervisors"
                ],
                "Mineral Processing & Metallurgy": [
                    "Mineral Processing Engineers", "Metallurgists (Process, Pyro, Hydro, Smelting, Refinery)", "Concentrator Plant Operators", "Mill Operators", "Smelter Operators", "Laboratory Technicians (Assay, Sampling, Quality Control)"
                ],
                "Maintenance & Reliability": [
                    "Mechanical Engineers (Mining Equipment Maintenance)", "Electrical Engineers (Power Systems, Substations)", "Maintenance Planners", "Reliability Engineers", "Fitters (Heavy Equipment, Plant)", "Welders & Fabricators", "Instrument Technicians"
                ],
                "Health, Safety & Environment (HSE)": [
                    "HSE Managers / Officers (Mining Certified)", "Environmental Engineers / Scientists", "Sustainability Specialists", "Industrial Hygienists", "First Aid Officers / Medics"
                ],
                "Support Services": [
                    "Supply Chain & Procurement Officers (Mining Materials & Equipment)", "Warehouse Supervisors / Storekeepers", "Camp Boss / Catering Crew (Remote Mining Sites)", "Security Officers", "Drivers (Light Vehicle, Heavy Vehicle, Water Truck)"
                ]
            },
            "Sustainability Projects Professionals": {
                "Sustainability & ESG Management": [
                    "Sustainability Managers", "ESG (Environmental, Social & Governance) Specialists", "Corporate Social Responsibility (CSR) Officers", "Environmental Compliance Officers", "Climate Change Analysts", "Carbon Footprint Specialists", "Sustainability Reporting Specialists (GRI, SASB, TCFD)"
                ],
                "Renewable Energy & Green Transition": [
                    "Renewable Energy Engineers (Solar, Wind, Hydro, Geothermal)", "Solar PV Design Engineers", "Wind Turbine Engineers / Technicians", "Energy Storage Specialists (Battery, Hydrogen)", "Grid Integration Engineers (Smart Grid, Microgrid)", "Renewable Project Managers"
                ],
                "Energy Efficiency & Decarbonization": [
                    "Energy Auditors / Energy Efficiency Engineers", "Decarbonization Specialists", "Net Zero Consultants", "Carbon Capture & Storage (CCS) Engineers", "Waste-to-Energy Project Specialists", "Green Building Consultants (LEED, BREEAM)"
                ],
                "Environmental Engineering & Natural Resources": [
                    "Environmental Engineers", "Environmental Scientists", "Waste Management Engineers", "Water Resource Engineers", "Air Quality Specialists", "Biodiversity / Wildlife Conservation Specialists", "Sustainable Agriculture Experts"
                ],
                "Circular Economy & Waste Management": [
                    "Circular Economy Specialists", "Recycling Engineers", "Waste Reduction Consultants", "Industrial Symbiosis Specialists", "Hazardous Waste Engineers", "E-Waste Management Specialists"
                ],
                "Health, Safety & Community": [
                    "HSE Officers (Sustainability Projects)", "Environmental Health Specialists", "Community Engagement Managers", "Social Impact Specialists", "Sustainability Trainers / Awareness Coordinators"
                ],
                "Support & Technical Services": [
                    "GIS & Remote Sensing Analysts (Environmental Mapping)", "Data Analysts (Sustainability Metrics, ESG KPIs)", "Policy & Regulatory Advisors (Green Policies, SDG Alignment)", "Procurement Specialists (Green Procurement, Sustainable Supply Chain)"
                ]
            },
            "Renewable Energy Professionals": {
                "Solar Energy": [
                    "Solar PV Design Engineers", "Solar PV Installation Technicians", "Solar O&M Engineers / Technicians", "Inverter & Electrical Specialists", "Rooftop Solar Engineers", "Utility-Scale Solar Project Managers", "Solar EPC Engineers", "PV Manufacturing & Module Specialists"
                ],
                "Wind Energy": [
                    "Wind Turbine Engineers (Mechanical, Electrical)", "Wind Turbine Technicians (Tower, Blades, Nacelle)", "Offshore Wind Engineers", "Wind Farm Site Assessors", "Wind Resource Analysts (Meteorology / CFD)", "Wind Turbine Blade Repair Specialists", "Wind Project Managers"
                ],
                "Hydropower & Marine Energy": [
                    "Hydropower Engineers (Dam, Turbine, Generator)", "Hydro Plant Operators & Technicians", "Small Hydro Project Engineers", "Tidal Energy Engineers", "Wave Energy Specialists", "Marine Energy Project Managers"
                ],
                "Hydrogen & Fuel Cells": [
                    "Hydrogen Project Engineers (Green/Blue Hydrogen)", "Hydrogen Electrolyzer Specialists", "Hydrogen Storage & Distribution Engineers", "Fuel Cell Engineers", "Hydrogen Safety Specialists", "Hydrogen Mobility Project Managers"
                ],
                "Bioenergy & Waste-to-Energy": [
                    "Bioenergy Engineers (Biomass, Biogas, Biofuel)", "Waste-to-Energy Engineers", "Anaerobic Digestion Specialists", "Biofuel Chemists & Process Engineers", "Biomass Plant Operators"
                ],
                "Energy Storage & Grid Integration": [
                    "Battery Storage Engineers (Lithium-ion, Flow Batteries)", "BESS (Battery Energy Storage System) Technicians", "Energy Management System (EMS) Engineers", "Smart Grid Engineers", "Microgrid Engineers", "Power Systems Engineers (Grid Stability & Integration)", "Renewable Integration Specialists"
                ],
                "Project Development & Management": [
                    "Renewable Energy Project Managers", "Renewable Energy Business Development Managers", "Permitting & Regulatory Specialists", "Environmental & Social Impact Assessors (ESIA)", "Financial Analysts (Renewable Energy Investment)", "Green Procurement Specialists"
                ],
                "Support & Research": [
                    "Renewable Energy Data Analysts", "R&D Specialists (Next-Gen Solar, Advanced Wind, Hydrogen Tech)", "Renewable Energy Trainers & Capacity Building Experts", "Policy & Regulatory Advisors (Renewable Laws, Incentives)"
                ]
            },
            "Finance & Accounts Team Professionals": {
                "Leadership & Strategy": [
                    "Chief Financial Officer (CFO)", "Finance Director", "Head of Finance & Accounts", "Financial Controller"
                ],
                "Core Finance & Accounting": [
                    "Financial Accountants", "Management Accountants", "General Ledger (GL) Accountants", "Accounts Payable (AP) Officers / Specialists", "Accounts Receivable (AR) Officers / Specialists", "Payroll Specialists", "Treasury Officers / Cash Management Specialists"
                ],
                "Budgeting, Planning & Analysis": [
                    "Financial Analysts", "Budgeting & Forecasting Specialists", "Cost Accountants", "Cost Control Engineers (Project Finance)", "Project Finance Analysts", "Capital Expenditure Analysts"
                ],
                "Audit, Compliance & Governance": [
                    "Internal Auditors", "External Auditors (Big 4 & Industry)", "Risk & Compliance Officers", "Tax Specialists (Direct, Indirect, International Tax)", "SOX / IFRS / GAAP Compliance Specialists"
                ],
                "Procurement & Commercial Finance": [
                    "Contract Finance Analysts", "Commercial Finance Managers", "Pricing Analysts / Estimation Specialists", "Procurement Finance Officers (Vendor Payments, Project Settlements)"
                ],
                "Banking & Investment": [
                    "Investment Analysts", "Corporate Finance Managers", "M&A Analysts (Mergers & Acquisitions)", "Treasury Managers", "Banking Relationship Managers"
                ],
                "ERP, Systems & Support": [
                    "ERP Finance Specialists (SAP FICO, Oracle Financials, MS Dynamics)", "Finance Data Analysts", "MIS Reporting Specialists", "Finance Administrators / Assistants"
                ]
            },
            "Banking Professionals": {
                "Executive Leadership": [
                    "Chief Executive Officer (CEO)", "Chief Financial Officer (CFO)", "Chief Risk Officer (CRO)", "Chief Compliance Officer (CCO)", "Chief Operating Officer (COO)", "Chief Digital Officer (CDO)", "Chief Information Security Officer (CISO)"
                ],
                "Retail & Consumer Banking": [
                    "Branch Managers", "Relationship Managers (Retail / Priority Banking)", "Personal Bankers", "Customer Service Officers", "Loan Officers (Personal, Auto, Mortgage)", "Credit Analysts", "Wealth Managers / Financial Advisors"
                ],
                "Corporate & Commercial Banking": [
                    "Corporate Banking Managers", "SME Banking Officers", "Trade Finance Specialists", "Treasury & Cash Management Officers", "Relationship Managers (Corporate Clients)", "Project Finance Analysts"
                ],
                "Investment Banking & Capital Markets": [
                    "Investment Bankers (M&A, IPO, Debt/Equity Capital)", "Equity Analysts", "Fixed Income Analysts", "Derivatives Traders", "Portfolio Managers", "Asset Management Specialists", "Private Equity Analysts"
                ],
                "Islamic Banking (Shariah-Compliant Finance)": [
                    "Islamic Banking Managers", "Shariah Advisors / Scholars", "Islamic Finance Product Specialists (Murabaha, Ijara, Sukuk)", "Takaful (Islamic Insurance) Specialists", "Risk & Compliance Officers (Shariah)"
                ],
                "Risk, Compliance & Governance": [
                    "Credit Risk Analysts", "Market Risk Specialists", "Operational Risk Officers", "Compliance Officers (AML / KYC / CFT)", "Internal Auditors (Banking Sector)", "Fraud Detection Analysts"
                ],
                "Digital & FinTech Banking": [
                    "Digital Banking Managers", "FinTech Specialists", "Mobile Banking App Developers", "Data Scientists (Banking Analytics)", "Blockchain & Cryptocurrency Analysts", "Cybersecurity Analysts", "Digital Payments Specialists"
                ],
                "Operations & Support": [
                    "Banking Operations Officers", "Clearing & Settlement Officers", "Loan Processing Specialists", "Trade Operations Officers (LC, Guarantees)", "Back-Office Executives", "Call Center / Contact Center Officers"
                ]
            },
            "Education Professionals": {
                "Leadership & Administration": [
                    "School Principals / Vice Principals", "Deans (Academic, Student Affairs, Research)", "Provosts / Chancellors", "Education Administrators", "Academic Directors / Program Coordinators", "Admissions & Enrollment Officers", "Registrar / Examination Officers"
                ],
                "Teaching & Academic Staff": [
                    "Professors (Assistant, Associate, Full)", "Lecturers / Senior Lecturers", "School Teachers (Primary, Secondary, Subject-Specific)", "Special Education Teachers", "Vocational / Technical Trainers", "Language Instructors (ESL, Arabic, French, etc.)", "Research Supervisors / PhD Mentors"
                ],
                "Curriculum & Learning Development": [
                    "Curriculum Developers", "Instructional Designers", "Learning & Development Specialists", "Education Policy Experts", "Pedagogy & Assessment Specialists", "Early Childhood Education Specialists"
                ],
                "Student Support & Services": [
                    "Academic Counselors", "Career Guidance Officers", "Student Affairs Officers", "Psychologists / Student Wellbeing Advisors", "Librarians / Archivists", "Sports & Physical Education Coaches"
                ],
                "Vocational & Technical Education": [
                    "Technical Instructors (Engineering, IT, Trades)", "Industrial Training Instructors (Welding, Mechanics, Electrical)", "Healthcare & Nursing Instructors", "Hospitality & Culinary Trainers", "Safety Trainers (HSE, First Aid, Fire Safety)"
                ],
                "EdTech & Digital Learning": [
                    "E-Learning Specialists", "Educational Technologists", "LMS Administrators (Moodle, Blackboard, Canvas)", "Online Course Designers (MOOCs, Corporate Training)", "VR/AR Learning Specialists", "AI & Data Analysts (Education Analytics)"
                ],
                "Quality, Accreditation & Research": [
                    "Accreditation Specialists (ABET, AACSB, NAAC, etc.)", "Quality Assurance Officers", "Educational Researchers", "Policy & Curriculum Analysts", "Grant & Research Funding Officers"
                ],
                "Support & Non-Academic Staff": [
                    "Administrative Assistants", "IT Support Specialists (Education Systems)", "HR Officers (Schools & Universities)", "Finance Officers (Tuition & Budgeting)", "Facility Managers (Campus Operations)", "Transport & Hostel Managers"
                ]
            },
            "Healthcare Professionals": {
                "Executive & Leadership": [
                    "Chief Medical Officer (CMO)", "Chief Nursing Officer (CNO)", "Hospital Director / Administrator", "Clinical Services Director", "Public Health Program Directors"
                ],
                "Doctors & Physicians": [
                    "General Practitioners (GPs)", "Specialists (Cardiologists, Neurologists, Oncologists, Orthopedists, etc.)", "Surgeons (General, Cardiothoracic, Neurosurgeon, Orthopedic, Plastic)", "Anesthesiologists", "Radiologists", "Pathologists", "Emergency Medicine Physicians", "Occupational Health Physicians"
                ],
                "Nursing & Midwifery": [
                    "Registered Nurses (RNs)", "Nurse Practitioners", "Clinical Nurse Specialists", "Midwives", "Operating Theatre Nurses / Scrub Nurses", "Critical Care / ICU Nurses", "Emergency Room Nurses", "Pediatric Nurses", "Community Health Nurses"
                ],
                "Allied Health Professionals": [
                    "Pharmacists / Clinical Pharmacists", "Laboratory Technologists / Technicians", "Radiology Technicians (MRI, CT, X-Ray, Ultrasound)", "Physiotherapists", "Occupational Therapists", "Speech & Language Therapists", "Dietitians / Nutritionists", "Respiratory Therapists", "Paramedics / EMTs"
                ],
                "Public Health & Community Care": [
                    "Public Health Officers", "Epidemiologists", "Immunization Officers", "Health Promotion Specialists", "Community Health Workers", "Field Medics (Remote Sites, Offshore, Mining Camps)"
                ],
                "Mental Health & Social Care": [
                    "Psychiatrists", "Clinical Psychologists", "Mental Health Counselors", "Psychiatric Nurses", "Social Workers", "Addiction Specialists"
                ],
                "Administration & Support": [
                    "Hospital Administrators", "Medical Records Officers / HIM Specialists", "Health Informatics Specialists", "Insurance & Claims Officers", "Patient Coordinators / PROs", "HR Officers (Healthcare Recruitment)", "Finance & Billing Officers"
                ],
                "Research, Education & Training": [
                    "Clinical Researchers", "Medical Scientists", "Research Coordinators", "Biostatisticians", "Medical Educators (Teaching Hospitals, Nursing Schools)", "Training & Development Specialists (CPR, BLS, ACLS Trainers)"
                ],
                "Ancillary & Non-Clinical Support": [
                    "Biomedical Engineers / Technicians", "Hospital Maintenance Technicians (Electrical, HVAC, Mechanical)", "Sterilization Technicians (CSSD)", "Cleaners / Housekeeping Staff", "Catering / Diet Staff", "Ambulance Drivers"
                ]
            },
            "Hospitality Professionals": {
                "Executive & Leadership": [
                    "General Manager (Hotel/Resort)", "Operations Manager", "Resident Manager", "Food & Beverage (F&B) Director", "Rooms Division Manager", "Revenue & Yield Manager", "Guest Experience Manager"
                ],
                "Front Office & Guest Services": [
                    "Front Office Manager", "Receptionists / Guest Service Agents", "Concierge / Guest Relations Officers", "Bellboys / Porters", "Duty Managers", "Night Auditors"
                ],
                "Food & Beverage (F&B)": [
                    "Restaurant Managers", "Banquet Managers", "Catering Managers", "Chefs (Executive, Sous, Pastry, Specialty)", "Cooks (Line Cooks, Commis)", "Bartenders / Mixologists", "Waiters / Waitresses", "Baristas", "Stewarding Staff"
                ],
                "Housekeeping & Maintenance": [
                    "Executive Housekeepers", "Housekeeping Supervisors", "Room Attendants / Housekeepers", "Laundry Managers / Attendants", "Facility Maintenance Technicians (Electrical, HVAC, Plumbing)", "Groundskeepers / Gardeners"
                ],
                "Events & Banquets": [
                    "Event Managers", "Banquet Supervisors", "Wedding Planners", "Conference & Exhibition Coordinators", "Audio-Visual Technicians (Event Support)"
                ],
                "Recreation & Guest Activities": [
                    "Spa Managers / Therapists", "Fitness Trainers", "Lifeguards / Pool Attendants", "Kids Club / Activity Coordinators", "Tour Guides / Excursion Leaders"
                ],
                "Travel, Tourism & Customer Support": [
                    "Travel Consultants", "Ticketing & Reservation Officers", "Tour Operators", "Cruise Staff", "Airline Ground Staff", "Customer Experience Specialists"
                ],
                "Sales, Marketing & Revenue": [
                    "Sales Managers (Corporate, MICE, Leisure)", "Digital Marketing Specialists (Hospitality & Travel)", "Brand Managers", "Public Relations Officers", "Revenue Analysts", "E-Commerce Managers (OTA / Booking Platforms)"
                ],
                "Administration & Support": [
                    "HR Managers (Hospitality Staffing)", "Training & Development Managers (Service Standards)", "Finance & Accounts Officers (Hotel Accounting)", "IT Support (POS Systems, Property Management Systems)", "Procurement Officers (F&B, Equipment, Linen)", "Security Managers / Guards"
                ]
            },
            "Food & Beverages (F&B) Professionals": {
                "Executive & Operations": [
                    "F&B Directors", "Operations Managers (Restaurants / Catering)", "Plant Managers (Food Processing)", "Production Managers (Beverage / Bottling Units)", "Quality & Compliance Managers (HACCP, ISO, Food Safety)"
                ],
                "Culinary & Kitchen": [
                    "Executive Chefs", "Sous Chefs", "Pastry Chefs", "Specialty Chefs (Continental, Asian, Arabic, Indian, etc.)", "Line Cooks / Commis Chefs", "Butchers / Meat Specialists", "Bakers / Confectioners", "Kitchen Helpers / Assistants"
                ],
                "Service & Frontline": [
                    "Restaurant Managers", "F&B Supervisors", "Waiters / Waitresses", "Hosts / Hostesses", "Bartenders / Mixologists", "Baristas", "Catering Service Staff", "Cashiers (POS Systems)"
                ],
                "Food Production & Processing": [
                    "Food Technologists", "Beverage Technologists", "Dairy Technologists", "Brewing Specialists (Beer, Beverages)", "Packaging Technicians", "Production Line Workers (Factories)", "Food Safety Officers"
                ],
                "Quality, Safety & Compliance": [
                    "HACCP Auditors", "Food Inspectors", "Microbiologists (Food Testing)", "QA/QC Analysts", "Hygiene Supervisors", "Environmental Health Officers"
                ],
                "Supply Chain & Logistics": [
                    "Procurement Officers (Raw Materials, Ingredients)", "Inventory Controllers", "Cold Chain Logistics Specialists", "Warehouse Supervisors", "Dispatch Officers", "Delivery Drivers"
                ],
                "Sales & Marketing": [
                    "Brand Managers (Food & Beverages)", "F&B Sales Executives (Hotels, Retail, Corporate)", "Key Account Managers (Supermarkets, Airlines, Catering Companies)", "Trade Marketing Specialists", "Product Development Managers", "Merchandisers (Retail / Modern Trade)"
                ],
                "Research & Product Development": [
                    "Food Scientists", "Nutritionists", "Product Development Specialists (New Recipes, Flavors, Beverages)", "Sensory Analysts (Taste & Quality Testing)", "Innovation Managers"
                ],
                "Support & Maintenance": [
                    "HR Officers (F&B Staffing & Training)", "Finance & Cost Control Officers", "Maintenance Technicians (Factory/Restaurant Equipment)", "IT Support (POS, ERP, Kitchen Systems)", "Cleaning & Sanitation Staff"
                ]
            },
            "Retail Professionals": {
                "Executive & Leadership": [
                    "Retail Directors", "Store General Managers", "Regional / Area Managers", "Operations Managers (Multi-Store)", "Category Managers (FMCG, Apparel, Electronics, etc.)", "Merchandising Managers", "Retail Analytics / Business Intelligence Managers"
                ],
                "Store Operations": [
                    "Store Managers", "Assistant Store Managers", "Floor Supervisors", "Cashiers / Checkout Operators", "Sales Associates / Sales Advisors", "Customer Service Representatives", "Inventory Clerks", "Visual Merchandisers", "Loss Prevention Officers / Store Security"
                ],
                "E-Commerce & Omnichannel": [
                    "E-Commerce Managers", "Online Merchandisers", "Marketplace Specialists (Amazon, Noon, Flipkart, etc.)", "Digital Marketing Specialists", "Customer Experience Specialists (Chat / Online Support)", "Last-Mile Delivery Coordinators"
                ],
                "Merchandising & Buying": [
                    "Buyers (FMCG, Fashion, Electronics, Luxury)", "Product Managers (Retail Categories)", "Demand Planners", "Supply Chain Analysts", "Pricing Analysts", "Vendor Relationship Officers"
                ],
                "Warehouse, Logistics & Supply Chain": [
                    "Warehouse Managers", "Distribution Center Supervisors", "Inventory Controllers", "Logistics Coordinators", "Supply Chain Managers", "Delivery Drivers (Retail / E-Commerce)"
                ],
                "Fashion & Luxury Retail Specialists": [
                    "Fashion Advisors / Stylists", "Luxury Brand Consultants", "Store Visual Designers (Luxury Boutiques)", "Tailors / Alteration Specialists", "Personal Shoppers"
                ],
                "Food & Grocery Retail": [
                    "Fresh Produce Supervisors", "Butchers / Fishmongers", "Bakery & Deli Staff", "Shelf Stackers / Stock Replenishers", "Cold Storage & Freezer Staff"
                ],
                "Sales, Marketing & CRM": [
                    "Sales Executives (B2C & B2B)", "Key Account Managers (Retail Chains)", "CRM Specialists (Loyalty Programs)", "Trade Marketing Executives", "Promotions & Campaign Managers", "Visual Display Artists"
                ],
                "Support & Administration": [
                    "HR Managers (Retail Staffing)", "Training & Development Officers (Customer Service, Sales Skills)", "Finance & Accounts Officers (Retail Budgeting & Reporting)", "IT Support (POS Systems, ERP, Retail Analytics)", "Maintenance Technicians (Store Equipment, Lighting, HVAC)"
                ]
            },
            "Transportation Professionals": {
                "Executive & Leadership": [
                    "Transport Directors / General Managers", "Fleet Operations Managers", "Transportation Planning Managers", "Mobility & Smart Transport Project Directors", "Public Transport Authority Officials"
                ],
                "Road Transport": [
                    "Fleet Supervisors (Buses, Trucks, Taxis)", "Bus / Coach Drivers", "Truck / Heavy Vehicle Drivers (HGV, LNG, Oil Tankers)", "Delivery Van Drivers", "Dispatch Coordinators", "Traffic & Route Planners", "Road Safety Officers"
                ],
                "Rail Transport": [
                    "Railway Operations Managers", "Train Drivers / Locomotive Engineers", "Station Masters", "Ticketing & Customer Service Staff", "Rail Traffic Controllers", "Signaling & Communication Technicians", "Track Maintenance Engineers", "Rolling Stock Technicians (Engines, Coaches)"
                ],
                "Aviation Transport": [
                    "Airline Operations Managers", "Flight Dispatchers", "Air Traffic Controllers", "Ground Handling Staff", "Baggage Handlers", "Ramp Agents", "Aircraft Maintenance Engineers (AMEs)", "Cabin Crew / Flight Attendants", "Pilots (Commercial, Cargo, Private Jet)"
                ],
                "Maritime & Shipping": [
                    "Port Operations Managers", "Ship Captains / Chief Officers", "Deck Officers / Seafarers", "Marine Engineers", "Tugboat Operators", "Port Pilots", "Stevedores (Loading/Unloading Workers)", "Customs & Documentation Officers", "Logistics & Freight Forwarding Specialists"
                ],
                "Logistics & Supply Chain (Cross-Mode)": [
                    "Transportation Planners", "Logistics Coordinators", "Route Optimization Specialists", "Freight Brokers", "3PL / 4PL Managers", "Warehouse & Distribution Managers", "Cold Chain Transport Specialists"
                ],
                "Maintenance & Technical": [
                    "Fleet Maintenance Managers", "Vehicle Technicians (Trucks, Buses, Cars)", "Tire Technicians", "Fuel & Lubrication Technicians", "Railcar & Track Maintenance Workers", "Aviation Technicians (Avionics, Airframe, Engines)", "Marine Technicians (Engines, Hull, Navigation Systems)"
                ],
                "Safety, Compliance & Regulation": [
                    "Transport Safety Managers", "HSE Officers (Transport)", "Traffic Inspectors / Regulators", "Compliance Officers (DOT, IATA, IMO Standards)", "Dangerous Goods Specialists (Air, Road, Sea)"
                ],
                "Support & Admin": [
                    "Customer Service Representatives (Transport Booking, Helpdesk)", "Ticketing & Reservation Agents", "Finance & Cost Control Officers", "HR Officers (Transport Workforce)", "IT Systems Specialists (Fleet Management Software, GPS Tracking)"
                ]
            },
            "Aviation Industry Professionals": {
                "Executive & Leadership": [
                    "Chief Executive Officer (Airline / Airport)", "Chief Operations Officer (COO)", "Chief Pilot / Director of Flight Operations", "Airport Director / General Manager", "Head of Safety & Compliance (Aviation)", "Airline Commercial Director (Sales & Strategy)"
                ],
                "Flight Crew": [
                    "Captains (Commercial, Cargo, Charter, Business Jets)", "First Officers / Co-Pilots", "Flight Engineers", "Cabin Crew / Flight Attendants", "Inflight Service Managers / Pursers"
                ],
                "Flight Operations & Control": [
                    "Flight Dispatchers", "Flight Operations Officers", "Crew Schedulers & Rostering Officers", "Flight Planning Specialists", "Operations Controllers (OCC Staff)", "Load Controllers / Weight & Balance Officers"
                ],
                "Air Traffic Management": [
                    "Air Traffic Controllers (ATC)", "Aeronautical Information Service (AIS) Officers", "Airspace & Route Planners", "ATC Technicians (Radar & Communication Systems)"
                ],
                "Airport Operations": [
                    "Airport Operations Managers", "Terminal Managers", "Passenger Service Agents", "Check-in Staff / Boarding Agents", "Baggage Handling Supervisors", "Ground Handling Agents", "Ramp Agents", "Gate Agents", "VIP / Lounge Service Staff"
                ],
                "Cargo & Logistics": [
                    "Cargo Operations Managers", "Cargo Handlers", "Freight Forwarding Specialists", "Dangerous Goods (DG) Officers", "Cold Chain Cargo Specialists", "Customs & Documentation Officers", "Loadmasters (Cargo Aircraft)"
                ],
                "Engineering & Maintenance (MRO)": [
                    "Aircraft Maintenance Engineers (AMEs) – Airframe, Engine, Avionics", "Licensed Aircraft Technicians (B1, B2 Categories)", "Avionics Engineers", "APU & Engine Overhaul Technicians", "Line Maintenance Technicians", "Base Maintenance Engineers", "Quality Assurance Inspectors (MRO)", "Component Technicians (Hydraulics, Landing Gear, Electronics)"
                ],
                "Safety, Security & Compliance": [
                    "Aviation Safety Officers", "Airworthiness Inspectors", "Flight Safety Investigators", "Quality Assurance & Compliance Officers (IATA, ICAO, GCAA, FAA, EASA standards)", "Aviation Security Supervisors (AVSEC)", "Airport Security Staff", "Fire & Rescue Officers (ARFF)"
                ],
                "Commercial & Customer Experience": [
                    "Airline Sales Managers", "Corporate Travel Managers", "Revenue Management Analysts", "Marketing & Loyalty Program Managers", "Customer Experience Officers", "Ground Customer Service Supervisors"
                ],
                "Support & Administration": [
                    "Finance & Accounts Officers (Airline/Airport)", "Procurement & Supply Chain Officers (Spare Parts, Ground Equipment)", "HR & Training Officers (Crew, Ground, Technical)", "Aviation IT Specialists (Flight Ops Software, Reservations Systems, GDS)", "Legal & Contracts Specialists (Airline / Airport Agreements)"
                ]
            },
            "Government & Ministries Projects Professionals": {
                "Executive & Leadership": [
                    "Project Directors / Project Managers (Government Projects)", "Program Managers (National Programs / Initiatives)", "Ministry Secretaries / Directors", "Chief Engineers / Technical Directors", "Policy & Regulatory Advisors", "Finance & Budget Directors"
                ],
                "Project Management & Planning": [
                    "Project Managers (Infrastructure, Energy, Education, Health)", "Construction Managers / Site Superintendents", "Planning & Scheduling Engineers", "Quantity Surveyors / Cost Controllers", "Contract Managers / Tendering Specialists", "Risk & Compliance Officers"
                ],
                "Engineering & Technical": [
                    "Civil Engineers (Roads, Bridges, Buildings, Utilities)", "Structural Engineers", "Mechanical Engineers (HVAC, Piping, Rotating Equipment)", "Electrical Engineers (Power Systems, Grid, Street Lighting)", "Instrumentation & Control Engineers", "Environmental Engineers / Sustainability Specialists", "Surveyors (Topographical, Geotechnical)"
                ],
                "Operations & Maintenance": [
                    "Facility Managers (Government Buildings, Utilities)", "Operations Supervisors", "Maintenance Engineers (Mechanical, Electrical, Instrumentation)", "HVAC / Plumbing / Electrical Technicians", "Safety & HSE Officers", "Utilities Operators (Water, Electricity, Sewage)"
                ],
                "Health, Education & Social Services": [
                    "Doctors / Specialists (Government Hospitals & Health Centers)", "Nurses & Paramedics", "Teachers / Professors (Public Schools, Colleges, Training Centers)", "Vocational / Technical Trainers", "Public Health Officers / Epidemiologists", "Social Workers / Community Development Officers"
                ],
                "Defense & Security": [
                    "Defense Engineers / Technical Specialists", "Security & Surveillance Officers", "Civil Defense Officers", "Fire & Rescue Personnel", "Emergency Response Coordinators", "Police & Law Enforcement Officers (Project Support)"
                ],
                "Procurement, Finance & Administration": [
                    "Procurement Officers / Supply Chain Specialists", "Contract Administrators", "Finance & Accounts Officers", "HR Officers / Staffing Coordinators", "Administrative Assistants", "Legal Advisors / Regulatory Compliance Specialists"
                ],
                "IT, Digital & Smart Services": [
                    "IT Managers / Systems Administrators", "GIS / Mapping Specialists", "Smart City / Urban Development Specialists", "Data Analysts & Reporting Officers", "Software Developers (Government Applications, ERP, e-Governance)", "Cybersecurity Specialists"
                ],
                "Research, Policy & Advisory": [
                    "Policy Analysts / Advisors", "Economic & Social Researchers", "Environmental Policy Specialists", "Urban Planners / Transport Planners", "Energy Policy & Renewable Specialists"
                ]
            },
            "IT & Technology Talent Pool": {
                "Executive & Leadership": [
                    "Chief Information Officer (CIO)", "Chief Technology Officer (CTO)", "IT Director / Head of IT", "VP of Engineering / Technology", "IT Program & Portfolio Directors", "Enterprise Architect"
                ],
                "IT Management & Strategy": [
                    "IT Managers (Infrastructure, Applications, Cloud)", "IT Project Managers (Agile, Waterfall)", "IT Program Managers", "IT Risk & Compliance Managers", "IT Governance Specialists", "Digital Transformation Leads"
                ],
                "Software Engineering & Development": [
                    "Software Architects (Enterprise, Cloud-Native)", "Full-Stack Developers (JavaScript, Python, Java, .NET)", "Backend Engineers (Microservices, APIs, Databases)", "Frontend Engineers (React, Angular, Vue.js)", "Mobile App Developers (iOS, Android, Flutter, React Native)", "DevOps Engineers / Site Reliability Engineers (SRE)", "Embedded Systems Engineers", "Game Developers / AR & VR Developers", "Low-Code / No-Code Developers", "QA Engineers (Automation & Manual Testing)", "Test Automation Architects (Selenium, Cypress, Playwright)"
                ],
                "Cloud & Infrastructure": [
                    "Cloud Architects (AWS, Azure, GCP, OCI)", "Cloud Engineers / Consultants", "Infrastructure Engineers (Linux, Windows, VMware)", "Network Architects & Engineers (LAN, WAN, SD-WAN)", "Storage & Backup Specialists", "DevSecOps Engineers", "Site Reliability Engineers (SRE)", "Kubernetes / Docker / Containerization Specialists", "Cloud Security Engineers"
                ],
                "Data, AI & Analytics": [
                    "Data Architects", "Data Engineers", "Data Analysts", "Business Intelligence (BI) Developers (Power BI, Tableau, Qlik)", "Machine Learning Engineers", "AI Specialists / Deep Learning Engineers", "NLP Engineers", "Big Data Specialists (Hadoop, Spark, Kafka)", "Database Administrators (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB)", "Data Governance & Compliance Specialists"
                ],
                "Cybersecurity & Risk": [
                    "Chief Information Security Officer (CISO)", "Security Architects", "Security Analysts / SOC Analysts", "Penetration Testers / Ethical Hackers", "Incident Response Specialists", "Threat Intelligence Analysts", "Governance, Risk & Compliance (GRC) Specialists", "Cloud Security Specialists", "Application Security Engineers"
                ],
                "Network & Telecom": [
                    "Network Architects", "Network Engineers (LAN/WAN, MPLS, SD-WAN)", "Telecom Engineers (VoIP, PBX, Unified Communications)", "Network Security Specialists (Firewalls, IDS/IPS)", "Wireless / 5G Specialists", "Network Monitoring & Optimization Engineers"
                ],
                "Enterprise Applications & ERP": [
                    "SAP Functional & Technical Consultants (SD, MM, FI, HCM, PP, ABAP)", "Oracle EBS / Fusion Consultants", "Microsoft Dynamics 365 Consultants", "Salesforce Consultants & Developers", "ERP Project Managers", "CRM Specialists", "ServiceNow Consultants / Developers"
                ],
                "AI, Robotics & Emerging Tech": [
                    "Robotic Process Automation (RPA) Developers / Architects", "AI/ML Engineers for Industrial Applications", "IoT / IIoT Engineers", "Blockchain Developers & Architects", "AR/VR / Metaverse Developers", "Quantum Computing Specialists", "Edge Computing Engineers"
                ],
                "IT Support & Operations": [
                    "IT Support Engineers / Helpdesk", "Desktop Support Specialists", "Systems Administrators (Windows/Linux)", "Cloud Operations Engineers", "Backup & Disaster Recovery Specialists", "IT Asset & License Managers", "End-User Computing (EUC) Engineers"
                ],
                "Specialized / Niche IT Roles": [
                    "Embedded Systems Developers (Automotive, IoT)", "FPGA / ASIC Engineers", "GPU Computing Specialists", "NLP / Chatbot Developers", "Voice Technology Engineers (Alexa, Google Assistant)", "Ethical Hackers / Red Team Specialists", "AI Ops Engineers (Machine Learning for IT Operations)", "Cyber Threat Hunters"
                ]
            },
            "Defense & Security Projects Professionals": {
                "Executive & Leadership": [
                    "Defense / Security Program Director", "Project Director (Military / Defense Projects)", "Chief Technical Officer (Defense Systems)", "Operations Director / VP", "HSE & Security Director", "Procurement / Logistics Director", "Strategy & Planning Director"
                ],
                "Engineering & Technical": [
                    "Defense Systems Engineers (Mechanical, Electrical, Electronics, Mechatronics)", "Weapons Systems Engineers", "Aerospace / Avionics Engineers", "Communication & Radar Engineers", "Cybersecurity Engineers (Defense IT Systems)", "Robotics & Autonomous Systems Engineers", "Surveillance & Sensor Systems Engineers", "Simulation & Training Systems Engineers"
                ],
                "Project Management & Execution": [
                    "Project Managers (Defense / Security Infrastructure)", "Construction Managers (Military Bases, Fortifications)", "Commissioning / Integration Engineers", "QA/QC Inspectors", "Document Controllers / Technical Writers", "Planning & Scheduling Engineers"
                ],
                "Operations & Field Support": [
                    "Security Officers / Supervisors", "Military Technicians & Operators", "Equipment Operators (Vehicles, Heavy Machinery)", "Field Engineers & Support Staff", "Facility & Base Maintenance Staff", "HSE & Safety Officers"
                ],
                "Cybersecurity & IT": [
                    "Network Security Specialists (Defense Networks)", "Ethical Hackers / Penetration Testers", "IT Support Officers (Secure Systems)", "Communication Systems Administrators", "Intelligence Analysts / Data Analysts", "Secure Cloud / Server Specialists"
                ],
                "Procurement & Logistics": [
                    "Procurement Officers (Defense Equipment, Materials, Services)", "Logistics & Supply Chain Coordinators", "Vendor / Contractor Managers", "Warehouse & Inventory Supervisors", "Fleet / Transport Managers"
                ],
                "Specialized / Niche Roles": [
                    "UAV / Drone Operators & Engineers", 
                    "Radar & Sonar Technicians", 
                    "Ballistics & Weapons Specialists", 
                    "Armory Technicians / Gunsmiths", 
                    "Explosives & EOD Specialists (Explosive Ordnance Disposal)"
                ]
            },
            "Pharmaceuticals & Life Sciences Professionals": {
                "Executive & Leadership": [
                    "CEO / Managing Director", "R&D Director", "Manufacturing / Operations Director", "Quality Assurance & Compliance Director", "Regulatory Affairs Director", "Clinical Research Director", "Supply Chain & Logistics Director"
                ],
                "Research & Development (R&D)": [
                    "Pharmaceutical Scientists", "Biotechnologists", "Molecular Biologists", "Formulation Scientists", "Process Development Scientists", "Medicinal Chemists", "Clinical Research Scientists", "Bioinformatics Specialists", "Pharmacologists / Toxicologists"
                ],
                "Manufacturing & Production": [
                    "Production / Plant Managers", "Production Supervisors", "Process Engineers (Chemical, Bioprocess)", "Operators (Tablet, Capsule, Injectable, Biologics)", "GMP / cGMP Technicians", "Packaging & Labeling Technicians", "Utility / Maintenance Engineers (Mechanical, Electrical, Instrumentation)", "Cleanroom Technicians"
                ],
                "Quality Assurance & Control": [
                    "QA / QC Managers", "QA / QC Officers", "Analytical Chemists", "Microbiologists", "Laboratory Technicians", "Validation Engineers (Equipment, Process, Cleaning)", "Stability / Sample Testing Specialists", "Calibration Specialists"
                ],
                "Regulatory & Compliance": [
                    "Regulatory Affairs Officers", "Pharmacovigilance Specialists", "Clinical Trial Compliance Officers", "Documentation Specialists", "FDA / EMA / ICH Compliance Experts", "Health Authority Liaison Officers"
                ],
                "Clinical Research & Trials": [
                    "Clinical Research Associates (CRA)", "Clinical Trial Managers", "Clinical Data Managers", "Biostatisticians", "Clinical Project Coordinators", "Medical Science Liaisons (MSL)"
                ],
                "Supply Chain & Logistics": [
                    "Procurement Officers (API, Excipients, Raw Materials)", "Warehouse & Inventory Managers", "Cold Chain / Temperature-Controlled Logistics Specialists", "Distribution / Dispatch Coordinators", "Vendor / Supplier Relationship Managers"
                ],
                "Sales, Marketing & Medical Affairs": [
                    "Pharmaceutical Sales Representatives", "Product / Brand Managers", "Medical Affairs Specialists", "Marketing & Market Access Specialists", "Key Account Managers (Hospitals, Pharmacies)", "Digital Marketing Specialists (Pharma Focused)"
                ],
                "IT, Data & Digital Health": [
                    "Laboratory Information Management System (LIMS) Specialists", "Clinical Data Analysts", "Bioinformatics / Computational Biology Specialists", "Digital Health / eClinical Specialists", "ERP / SAP Specialists (Pharma Modules)"
                ],
                "Specialized / Niche Roles": [
                    "Bioprocess Engineers", "Biologics / Vaccine Production Specialists", "Gene Therapy / Cell Therapy Scientists", "Analytical Method Development Specialists", "Formulation & Excipient Specialists", "Toxicology & Safety Evaluation Scientists"
                ]
            },
            "Automotive & Mobility Professionals": {
                "Executive & Leadership": [
                    "CEO / Managing Director", "Chief Technical Officer (CTO) – Automotive", "VP / Director – Manufacturing & Production", "VP / Director – Engineering & R&D", "VP / Director – Supply Chain & Logistics", "Mobility Solutions / EV Program Director"
                ],
                "Engineering & R&D": [
                    "Automotive Engineers (Mechanical, Electrical, Electronics, Mechatronics)", "Design & Development Engineers (Vehicle, Component, Powertrain)", "EV & Battery Engineers", "Embedded Systems Engineers (Automotive Electronics)", "Software Engineers (ADAS, Infotainment, Telematics)", "Vehicle Dynamics Engineers", "CAD / CAM / CAE Designers", "NVH (Noise, Vibration, Harshness) Specialists", "Simulation & Testing Engineers"
                ],
                "Manufacturing & Production": [
                    "Production / Plant Managers", "Assembly Line Supervisors", "Process & Industrial Engineers", "Quality Engineers / Inspectors (ISO, TS 16949, IATF)", "Welding / Fabrication Specialists", "Paint & Coating Technicians", "Robotics / Automation Engineers", "Maintenance Technicians (Mechanical, Electrical, PLCs)"
                ],
                "Supply Chain & Logistics": [
                    "Procurement Officers (OEMs, Components, Raw Materials)", "Vendor Development & Relationship Managers", "Warehouse & Inventory Managers", "Logistics Coordinators (Inbound/Outbound)", "Material Planners / Expeditors", "Fleet / Transportation Managers"
                ],
                "Sales, Marketing & Customer Experience": [
                    "Sales Managers / Executives (Dealership & Corporate)", "Brand & Product Managers", "After-Sales / Service Managers", "Customer Relationship Managers (CRM)", "Marketing & Digital Campaign Specialists", "EV Charging & Mobility Service Specialists"
                ],
                "Service & Maintenance": [
                    "Automotive Service Technicians (Mechanical, Electrical, EV)", "Service Advisors / Supervisors", "Diagnostic & Troubleshooting Specialists", "Workshop / Garage Managers", "Field Service Engineers", "Spare Parts Specialists / Managers"
                ],
                "Mobility & Emerging Technologies": [
                    "EV / Hybrid Vehicle Specialists", "Battery Management & Charging Infrastructure Engineers", "Autonomous Vehicle Engineers", "Telematics & IoT Specialists", "Mobility-as-a-Service (MaaS) Solution Architects", "Connected Vehicle / V2X Engineers"
                ],
                "Safety, Compliance & Testing": [
                    "Vehicle Safety Engineers (Crash, Regulatory)", "Quality & Compliance Officers", "Certification Specialists (ISO, UNECE, Local Standards)", "Emission & Environmental Testing Engineers", "HSE Officers (Manufacturing & Mobility Projects)"
                ],
                "Specialized / Niche Roles": [
                    "Powertrain Engineers (ICE, Electric, Hybrid)", "Motor & Drive Engineers (EV)", "Battery Design & Testing Specialists", "ADAS / AI Mobility Engineers", "Automotive Simulation Specialists", "Telematics Data Analysts"
                ],
                "Support & Administration": [
                    "HR & Recruitment Officers", "Finance & Accounts Officers", "IT & Systems Support (ERP, PLM, MES)", "Document Controllers / Technical Writers", "Training & Skill Development Officers"
                ]
            },
            "Media & Creative Professionals": {
                "Executive & Leadership": [
                    "Chief Marketing Officer (CMO)", "Creative Director / Executive Creative Director", "Head of Media & Communications", "Head of Brand Strategy", "Head of Digital Marketing", "Head of Content & Production"
                ],
                "Content Creation & Copywriting": [
                    "Copywriters (Advertising, Web, Social Media)", "Content Writers / Editors", "Technical Writers", "Scriptwriters (TV, Film, Digital Media)", "Storyboard Artists", "Content Strategists", "SEO / SEM Content Specialists"
                ],
                "Design & Visual Arts": [
                    "Graphic Designers", "UI/UX Designers", "Motion Graphics Artists", "Illustrators", "Brand & Identity Designers", "Packaging Designers", "3D Artists / Animators", "Photography / Videography Specialists"
                ],
                "Digital Media & Marketing": [
                    "Digital Marketing Managers", "Social Media Managers / Specialists", "Performance Marketing Specialists (PPC, SEM, Paid Ads)", "SEO / SEM Analysts", "Marketing Automation Specialists", "Web Developers (Frontend / Backend)", "Email Marketing Specialists", "Analytics & Data Specialists (Web, Social, Campaigns)"
                ],
                "Broadcasting & Production": [
                    "TV / Film Producers", "Directors & Assistant Directors", "Video Editors / Post-Production Specialists", "Sound Engineers / Audio Technicians", "Camera Operators / Cinematographers", "Studio & Field Production Crew", "Lighting Technicians", "Set Designers & Production Designers"
                ],
                "Advertising & Branding": [
                    "Account Managers / Executives", "Media Planners & Buyers", "Brand Managers", "Creative Strategists", "Campaign Managers", "Experiential Marketing Specialists", "Event Managers & Coordinators"
                ],
                "Specialized / Niche Roles": [
                    "AR / VR Content Developers", "Motion Capture Artists", "Gaming / Interactive Media Designers", "Influencer Marketing Specialists", "Video Game Designers & Developers", "Podcast / Audio Content Producers"
                ],
                "Support & Administration": [
                    "HR & Recruitment Officers (Creative & Media Staffing)", "Finance & Accounts Officers", "IT / Systems Support (Media Tools, Servers, Software Licenses)", "Project Coordinators / Production Coordinators", "Legal & Copyright Specialists"
                ]
            },
            "Telecommunications Professionals": {
                "Executive & Leadership": [
                    "Chief Technology Officer (CTO – Telecom)", "Chief Network Officer (CNO)", "VP / Director – Network Operations", "VP / Director – IT & Telecom Integration", "Program / Project Directors (Telecom Projects)", "Strategy & Planning Directors"
                ],
                "Network Engineering & Operations": [
                    "Network Architects (Core, Transport, Access, IP/MPLS)", "Network Engineers (LAN/WAN, SD-WAN, Optical, Microwave)", "Radio Frequency (RF) Engineers", "Transmission Engineers (Fiber Optics, Microwave Links)", "Network Operations Center (NOC) Engineers", "Wireless / Mobile Network Engineers (2G/3G/4G/5G)", "Small Cell / DAS Engineers (Indoor Coverage)", "Satellite Communication Engineers", "Telecom Field Engineers / Technicians"
                ],
                "Telecom Core & Switching": [
                    "Core Network Engineers (MSC, HLR, HSS, EPC, IMS)", "Switching / PBX Engineers (TDM, IP-PBX)", "VoIP Engineers", "IMS & VoLTE Specialists", "Signaling & Protocol Specialists (SS7, SIP, Diameter)"
                ],
                "Telecom IT & Integration": [
                    "OSS / BSS Specialists (Billing, CRM, Mediation, Provisioning)", "Telecom Software Developers (Network Management, OSS/BSS Tools)", "IT Infrastructure Engineers (Servers, Storage, Virtualization)", "Cloud / NFV / SDN Engineers", "Network Security Specialists (Firewalls, VPNs, DDoS Protection)", "Data Analysts & BI Specialists (Traffic, Usage, QoS)"
                ],
                "Project Engineering & Deployment": [
                    "Telecom Project Managers", "RF Planning & Optimization Engineers", "Site Acquisition Specialists", "Civil / Tower / Infrastructure Engineers", "Installation & Commissioning Engineers", "Fiber Optic Splicing Technicians", "DAS / Small Cell Deployment Technicians", "Testing & Integration Engineers"
                ],
                "Sales, Marketing & Customer Support": [
                    "Key Account Managers (Enterprise, Wholesale, Government)", "Corporate Sales Managers", "Customer Service / Call Center Representatives", "Technical Support Engineers", "Field Service Technicians", "Retail / Distribution Sales Executives"
                ],
                "Regulatory & Compliance": [
                    "Telecom Regulatory Specialists", "Spectrum Planning & Licensing Officers", "Compliance & Audit Officers (Telecom Standards)", "Health & Safety Officers (Tower Climbing, RF Exposure)"
                ],
                "Specialized / Niche Roles": [
                    "5G Core & RAN Specialists", "IoT / M2M Network Engineers", "Network Security Analysts (Telecom Threats)", "Satellite / VSAT Engineers", "RF Propagation & Drive Test Engineers", "Telecom Data Center Engineers", "Network Optimization Specialists (Voice & Data QoS)"
                ],
                "Support & Administration": [
                    "HR Officers (Telecom Staffing & Mobilization)", "Finance & Accounts Officers", "Procurement & Contracts Officers", "IT Support (Enterprise Systems, OSS/BSS, Billing Systems)", "Documentation & Technical Writers"
                ]
            }
        },
        
        // This list is intended for a navigation component
        industryNavigation: [
            "Oil & Gas", "EPCM", "Engineering", "Mining", "Sustainability", "Renewable Energy", "Finance & Banking", "Education", "Healthcare", "Hospitality", "Food & Beverages", "Retail", "Transportation", "Aviation", "IT", "Petrochemical", "Refineries", "Telecommunications", "Media & Creative", "Pharmaceuticals", "Automotive", "Defense & Security", "Heavy Industries", "Aerospace", "Marine & Shipbuilding", "Textile & Garments", "… and more."
        ],
        
        finalSummary: "With DAN International Solutions, you access a world-class, certified workforce ready to support projects across industries, geographies, and compliance frameworks. Whether you need executives, engineers, specialists, or blue-collar manpower, our global talent network ensures that the right expertise is delivered on time, within budget, and in line with your compliance needs."
    };

    return (
        <PageContainer>
            <h1>Global Talent Pool</h1>
            <p>{talentData.intro}</p>

            {/* Section 1: Key Approvals & Certifications */}
            <SectionTitle> Key Approvals & Industry Certifications</SectionTitle>
            
            {talentData.certifications.map((cert, index) => (
                <CategoryBox key={index}>
                    <SubSectionTitle>{cert.title}</SubSectionTitle>
                    {cert.approvals && cert.approvals.length > 0 && (
                        <>
                            <h4 style={{ color: PRIMARY_COLOR, marginTop: '20px' }}>Approvals & Standards:</h4>
                            <CertificationList>
                                {cert.approvals.map((item, i) => <li key={i}>{item}</li>)}
                            </CertificationList>
                        </>
                    )}
                    
                    <h4 style={{ color: PRIMARY_COLOR, marginTop: '20px' }}>Certifications:</h4>
                    <CertificationList>
                        {cert.certifications.map((item, i) => <li key={i}>{item}</li>)}
                    </CertificationList>
                </CategoryBox>
            ))}
            
            {/* Section 2: Why Choose Us */}
            <SectionTitle>✅ Why Choose DAN’s Talent Pool?</SectionTitle>
            <p style={{ fontWeight: 500, color: SECONDARY_COLOR }}>We provide manpower that is:</p>
            <List>
                {talentData.whyChoose.map((point, index) => <li key={index}>{point}</li>)}
            </List>
            <p style={{ marginTop: '20px', fontWeight: 500 }}>{talentData.finalSummary}</p>
            
            {/* Section 3: Industry Navigation (Professional Pill Style) */}
            <SectionTitle>Industry Navigation</SectionTitle>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                {talentData.industryNavigation.map((industry, index) => (
                    <span 
                        key={index} 
                        style={{ 
                            padding: '8px 15px', 
                            border: `2px solid ${PRIMARY_COLOR}`, 
                            borderRadius: '25px', 
                            cursor: 'pointer', 
                            backgroundColor: '#ffffff',
                            color: PRIMARY_COLOR,
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {industry}
                    </span>
                ))}
            </div>

            {/* Section 4: Detailed Professional Lists by Industry */}
            <SectionTitle>Detailed Professional Roles</SectionTitle>
            
            {Object.entries(talentData.industryProfessionals).map(([majorIndustry, subIndustries]) => (
                <CategoryBox key={majorIndustry}>
                    {/* Major Industry Title is bold and uses the primary color */}
                    <h2 style={{ color: PRIMARY_COLOR, borderBottom: `1px solid ${PRIMARY_COLOR}`, paddingBottom: '10px', fontSize: '1.5rem', marginBottom: '15px' }}>
                        {majorIndustry}
                    </h2>

                    {Object.entries(subIndustries).map(([subIndustryTitle, roles]) => (
                        <div key={subIndustryTitle} style={{ marginTop: '20px' }}>
                            <SubSectionTitle>{subIndustryTitle}</SubSectionTitle>
                            <List>
                                {Array.isArray(roles) && roles.map((role, index) => <li key={index}>{role}</li>)}
                            </List>
                        </div>
                    ))}
                </CategoryBox>
            ))}
            
        </PageContainer>
    );
};

export default GlobalTalentPool;