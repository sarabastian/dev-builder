class CreateReplies < ActiveRecord::Migration[6.0]
  def change
    create_table :replies do |t|
      t.integer :post_id
      t.integer :replier_id
      t.string :reply

      t.timestamps
    end
  end
end
