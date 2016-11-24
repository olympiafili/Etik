class AddSungateCodeToRollGuides < ActiveRecord::Migration
  def change
    add_column :roll_guides, :sungate_code, :string
  end
end
