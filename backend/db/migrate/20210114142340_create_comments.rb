class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :project_id
      t.integer :commenter_id

      t.timestamps
    end
  end
end
