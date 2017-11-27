class AddNumSlidesToOpenTypes < ActiveRecord::Migration
  def change
    add_column :open_types, :num_slides, :float
  end
end
