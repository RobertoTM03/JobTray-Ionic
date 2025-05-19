import { Vacancy } from './vacancy';

export interface VacancyWithFavorite extends Vacancy {
  isFavorite: boolean;
}
