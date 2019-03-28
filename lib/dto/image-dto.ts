import {DtoId} from "./dto-id";

export class ImageDto implements DtoId {

  public id?: number;
  public contentType: String;
  public image: Blob;

  constructor(imageDto: ImageDto) {
    this.id = imageDto.id;
    this.contentType = imageDto.contentType;
    this.image = imageDto.image;
  }
}
