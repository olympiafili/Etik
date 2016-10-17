class AddMegaliPerigrafiToLines < ActiveRecord::Migration
  def change
    add_column :lines, :sungate_description, :text
  end
end
