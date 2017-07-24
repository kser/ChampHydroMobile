import { District } from '../models/district';
import { Project } from '../models/project';

export const MIKE_DISTRICTS:District[] = [
//MIKE
  new District(
    "CINCO MUD 8",
    "data",
    [
    new Project("Fire Station Pond", ""),
    new Project("Papa Blakely Pond", ""),
    ]
    ),
  new District(
    "FBC MUD 145",
    "data",
    [
    new Project("Rio Vista Detention Pond", ""),
    new Project("Detention Pond", ""),
    new Project("Drainage Channel", ""),
    new Project("Rio Vista Greenspace", ""),
    new Project("Gabion Outfall"),	//no map needed 
    new Project("Alley")		//no map needed
    ]
    ),
  new District(
    "FBC MUD 161",
    "data",
    [
    new Project("Reserve at Katy Detention", ""),
    new Project("Pipeline Easement/Reserve at Katy", ""),
    new Project("Secondary Pond")	//new map to be sent
    ]
    ),
  new District(
    "FBC MUD 199",
    "data",
    [
    new Project("Katy Main Street Pond", "")
    ]
    ),
  new District(
    "FBC MUD 206",	//new map to be sent
    "data",
    [
    new Project("Camellia Section 1 Raingardens"),		//new map to be sent
    new Project("Detention Basins 1 & 2"),				//new map to be sent
    ]
    ),
  new District(
    "HC MUD 149",
    "data",
    [
    new Project("Detention Pond"),	// Drainage channel?
    new Project("WWTP", ""),
    new Project("Water Plant", ""),
    new Project("Lift Station", "")
    ]
    ),
  new District(
    "HC MUD 257",
    "data",
    [
    new Project("Lakeview Haven")		// only use overview map

    ]
    ),
  new District(
    "HC MUD 321",
    "data",
    [
    new Project("Pinto Business Park")
    ]
    ),
  new District(
    "HC MUD 401",
    "data",
    [
    new Project("Inverness Estates Primary Pond", ""),
    new Project("Inverness Estates Secondary Pond", ""),
    new Project("Reserve at Inverness", ""),
    new Project("Albury Trails", ""),
    ]
    ),
  new District(
    "HC MUD 406",
    "data",
    [
    new Project("Pinto Business Park")
    ]
    ),
  new District(
    "NWHC MUD 19",
    "data",
    [
    new Project("Lago Woods Detention", ""),
    new Project("Augusta Pines Sec 11, Pond 1", ""),
    new Project("Augusta Pines Sec 11, Pond 2", ""),
    new Project("Augusta Pines Community Center Rd Detention"),	//no map needed
    new Project("Augusta Pines Mitigation Basins"),				//red?
    new Project("Shadow Creek Detention Basin", ""),
    new Project("West Rayford Sec 2 Channel"),					//no map needed
    new Project("Augusta Pines Sec 4 & 8"),						//red?
    new Project("Shadow Creek South Detention Basin A", ""),
    new Project("Shadow Creek South Detention Basin B", ""),
    new Project("Shadow Creek South Detention Basin C", ""),
    new Project("Shadow Creek South Detention Basin D", ""),
    new Project("HCFCD Unit M104"),								//red
    new Project("Augusta Pines Sec 7 & 10 Detention Basin")		//no map needed
    ]
    ),
  new District(
    "WALLER COUNTY RID 1",
    "data",
    [
    new Project("Vintage", "")
    ]
    ),
  new District(
    "WILLOW CREEK FARMS MUD",
    "data",
    [
    new Project("Vintage", "")
    ]
    ),
  new District(
    "WOODCREEK RESERVE MUD",
    "data",
    [
    new Project("Vintage", "")
    ]
    )
  ];

