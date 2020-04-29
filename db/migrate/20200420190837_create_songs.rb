class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.references :album, null: false, foreign_key: true
      t.integer :played_count, default: 0

      t.timestamps
    end
  end
end
