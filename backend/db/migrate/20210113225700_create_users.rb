class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :location
      t.references :commenter, foreign_key: { to_table: :users }
      t.references :supporter, foreign_key: { to_table: :users }
      t.references :requester, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
