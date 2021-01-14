class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :story
      t.integer :timeline
      t.string :fundraising_goal
      t.string :image
      t.string :github
      t.string :language
      t.string :stage
      t.integer :user_id

      t.timestamps
    end
  end
end
