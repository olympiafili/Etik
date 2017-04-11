class ChangeDataTypeForBase64Code2 < ActiveRecord::Migration
  def change
    change_column(:orders, :base64_code, :longblob)
	end
end
