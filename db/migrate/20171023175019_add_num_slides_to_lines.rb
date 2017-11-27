class AddNumSlidesToLines < ActiveRecord::Migration
  def change
    add_column :lines, :num_slides, :float
  end
end
