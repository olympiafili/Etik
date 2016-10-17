class AddSungateCodeToColors < ActiveRecord::Migration
  def change
    add_column :colors, :sungate_in, :text
    add_column :colors, :sungate_out, :text
    add_column :colors, :sungate_both, :text
  end
end
