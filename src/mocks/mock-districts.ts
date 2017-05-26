import { District } from '../models/district';
import { Project } from '../models/project';

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/jpg");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

export const DISTRICTS:District[] = [
  new District(
    "HC MUD NO. 468",
    getBase64Image("assets/img/DistrictMaps/mud-468-map.jpg"),
    [
    new Project("Vintage Southeast Detention Pond")
    ]
    ),
  new District(
    "HC Base 64",
    // "assets/img/DistrictMaps/hc-mud-468.bin",
    "assets/img/DistrictMaps/mud-468-map.jpg",
    [
    new Project("Vintage Southeast Detention Pond")
    ]
    )
  ];

