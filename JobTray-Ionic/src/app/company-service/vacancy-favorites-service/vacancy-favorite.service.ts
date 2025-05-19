// vacancy-favorite.service.ts
import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Vacancy } from '../../company-models/vacancy';

@Injectable({
  providedIn: 'root',
})
export class VacancyFavoriteService {
  private sqlite: SQLiteConnection;
  private db: SQLiteDBConnection | null = null;
  private isWeb: boolean = false;
  private readonly DB_NAME = 'favoritesDB';
  private readonly TABLE_NAME = 'favorites';

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
    this.initDB();
  }

  private async initDB(): Promise<void> {
    try {
      this.isWeb = Capacitor.getPlatform() === 'web';

      if (!this.isWeb) {
        this.db = await this.sqlite.createConnection(this.DB_NAME, false, 'no-encryption', 1, false);
        await this.db.open();
        await this.db.execute(`
          CREATE TABLE IF NOT EXISTS ${this.TABLE_NAME} (
                                                          id TEXT PRIMARY KEY,
                                                          name TEXT,
                                                          description TEXT,
                                                          image TEXT
          );
        `);
      }
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }


  async addFavorite(vacancy: Vacancy): Promise<void> {
    if (this.db) {
      await this.db.run(
        `INSERT OR REPLACE INTO ${this.TABLE_NAME} (id, name, description, image) VALUES (?, ?, ?, ?)`,
        [vacancy.id, vacancy.name, vacancy.description, vacancy.image]
      );
    }
  }

  async removeFavorite(vacancyId: string): Promise<void> {
    if (this.db) {
      await this.db.run(`DELETE FROM ${this.TABLE_NAME} WHERE id = ?`, [vacancyId]);
    }
  }

// vacancy-favorite.service.ts
  async getFavorites(): Promise<string[]> {
    if (this.db) {
      const result = await this.db.query(`SELECT id FROM ${this.TABLE_NAME}`);
      // Devuelve solo los IDs como una lista de strings
      return result.values ? result.values.map((row) => row.id as string) : [];
    }
    return [];
  }

  async isFavorite(vacancyId: string): Promise<boolean> {
    if (this.db) {
      const result = await this.db.query(`SELECT id FROM ${this.TABLE_NAME} WHERE id = ?`, [vacancyId]);
      return result.values ? result.values.length > 0 : false;
    }
    return false;
  }
}
