class RenamePanelInfoToLineDesc < ActiveRecord::Migration
  def change
  	rename_column :orders, :panel_info, :line_desc
  end
end
