import { District } from '../models/district';
import { Project } from '../models/project';

export const DISTRICTS:District[] = [
  new District(
    "HC MUD 468", 
    "assets/img/DistrictMaps/mud-468-map.jpg",
    [new Project("Vintage Southeast Detention Pond")]
    ),
    new District(
    "FBC MUD 167", 
    "assets/img/DistrictMaps/mud-167-map.jpg",
    [
      new Project("Detention Pond 1"),
      new Project("Detention Pond 2")
      ]
    ),
    new District(
    "FBC MUD 158", 
    "assets/img/DistrictMaps/mud-158-map.jpg",
    [
      new Project("River Run Drainage Channel"),
      ]
    ),
    new District(
    "FBC MUD 159", 
    "assets/img/DistrictMaps/mud-159-map.jpg",
    [
      new Project("Oaks of Rosenberg"),
      ]
    ),
    new District(
    "HC MUD 374", 
    "assets/img/DistrictMaps/mud-374-map.jpg",
    [
      new Project("Channel A"),
      new Project("Drop Pool 1"),
      new Project("Drop Pool 2"),
      new Project("Channel B"),
      new Project("Mound Road Pond"),
      new Project("Channel C")
      ]
    ),
    new District(
    "HC MUD 433", 
    "assets/img/DistrictMaps/mud-433-map.jpg",
    [
      new Project("IDC 1"),
      new Project("IDC 2"),
      new Project("IDC 3"),
      new Project("IDC 4"),
      new Project("IDC 5"),
      new Project("Drainage Channel Phase II")
      ]
    ),
    new District(
    "HC MUD 106", 
    "assets/img/DistrictMaps/mud-106-map.jpg",
    [
      new Project("Commerical Mix Pond"),
      new Project("Eagle Springs North Channel")
      ]
    ),
    new District(
    "HC MUD 290", 
    "assets/img/DistrictMaps/mud-290-map.jpg",
    [
      new Project("Eagle Springs"),
      new Project("Eagle Springs Detention Pond"),
      new Project("Williams Gully")
      ]
    ),
    new District(
    "HC MUD 238", 
    "assets/img/DistrictMaps/mud-238-map.jpg",
    [
      new Project("Oakridge Detention Pond"),
      new Project("Barker's Crossing Pond"),
      new Project("Lake Ridge Pond"),
      new Project("Facilities"),
      new Project("Harris County Channels")
      ]
    ),
    new District(
    "HC MUD 157", 
    "assets/img/DistrictMaps/mud-157-map.jpg",
    [
      new Project("FM 529 Retail center Detention Pond"),
      ]
    ),
    new District(
    "HC MUD 285", 
    "assets/img/DistrictMaps/mud-285-map.jpg",
    [
      new Project("New Forest Channel"),
      new Project("Carpenter's Landing"),
      new Project("Liberty Lakes"),
      new Project("New Forest Pond")
      ]
    )
    ];
