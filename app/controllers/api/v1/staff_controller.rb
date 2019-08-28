class Api::V1::StaffController < ApplicationController
    def index
        render json: { :class_periods => [
            {
                first_name: "8-26-9",
                last_name: "monday",
                phone_number: "monday",
                email: "",
                schools: ""
            }
        ]
        }.to_json
    end
end