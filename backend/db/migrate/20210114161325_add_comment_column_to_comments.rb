class AddCommentColumnToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :blurb, :string
  end
end
