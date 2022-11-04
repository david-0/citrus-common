import {IDtoId} from "./i-dto-id";

export class ImageDto implements IDtoId {

  public id?: number;
  public contentType: string;
  public image: Blob;

  constructor(imageDto: ImageDto) {
    this.id = imageDto.id;
    this.contentType = imageDto.contentType;
    this.image = imageDto.image;
  }
}
