class AddDescriptionToLines < ActiveRecord::Migration
  def change
    add_column :lines, :description, :text
  end
end
