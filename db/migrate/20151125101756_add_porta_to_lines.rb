class AddPortaToLines < ActiveRecord::Migration
  def change
    add_column :lines, :porta, :int
  end
end
