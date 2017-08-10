import { District } from '../models/district';
import { Project } from '../models/project';

export const BILL_DISTRICTS:District[] = [
//BILL  
  new District(
    "CC ID 3",
    "data",
    [
    new Project("Kilgore Parkway Drainage Channel", ""),
    new Project("Bay Ten North Drainage Pond", ""),
    ]
    ),
  new District(
    "FBC MUD 130",
    "data",
    [
    new Project("East Detention Pond", ""),
    new Project("West Detention Pond", "")
    ]
    ),
  new District(
    "HC MUD 341",
    "data",
    [
    new Project("South Turkey Creek", ""),
    new Project("CORPS - Turkey Creek - HC MUD 341", "")
    ]
    ),
  new District(
    "HC MUD 341 /370",
    "data",
    [
    new Project("CORPS - Turkey Creek - HC MUD 370", ""),
    new Project("North Turkey Creek", ""),
    new Project("Satsuma Lakes", "")
    ]
    ),
  new District(
    "FFB",
    "data",
    [
    new Project("Vicksburg", ""),
    new Project("Vicksburg", ""),
    new Project("Creekmont", ""),
    new Project("Jogging", "")
    ]
    ),
];