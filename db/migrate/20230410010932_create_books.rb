class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.references :list, foreign_key: true
      t.string :title
      t.string :author
      t.integer :status, default: 0
      t.integer :total_pages
      t.integer :current_page

      t.timestamps
    end
    add_index :books, :title
  end
end