import {ArticleStockDto} from "./article-stock-dto";
import {DtoId} from "./dto-id";
import {OpeningHourDto} from "./opening-hour-dto";

export class LocationDto implements DtoId {

  public id?: number;
  public comment: string;
  public street: string;
  public number: string;
  public addition: string;
  public zipcode: string;
  public city: string;
  public description: string;
  public availableArticleStocks?: ArticleStockDto[];
  public openingHours?: OpeningHourDto[];

  constructor(location: LocationDto) {
    this.id = location.id;
    this.comment = location.comment;
    this.street = location.street;
    this.number = location.number;
    this.addition = location.addition;
    this.zipcode = location.zipcode;
    this.city = location.city;
    this.description = location.description;
    this.availableArticleStocks = location.availableArticleStocks;
    this.openingHours = location.openingHours;
  }

  public static createEmpty(): LocationDto {
    return new LocationDto({
      comment: "",
      street: "",
      number: "",
      addition: "",
      zipcode: "",
      city: "",
      description: "",
      availableArticleStocks: [],
      openingHours: []
    });
  }

  static createWithId(id: number, pickupLocation: LocationDto): LocationDto {
    const to = new LocationDto(pickupLocation);
    to.id = id;
    return to;
  }
}
