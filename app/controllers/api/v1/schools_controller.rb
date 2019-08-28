class Api::V1::SchoolsController < ApplicationController
    def index
        render json: { :class_periods => [
            {
                date: "8-26-9",
                weekday: "monday"
            }
        ]
        }.to_json
    end
end