class AddAvatarToParaggelia < ActiveRecord::Migration
  def change
    add_column :paraggelia, :avatar, :string
  end
end
