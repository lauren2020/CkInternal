class ClassPeriodsController < ApplicationController
    def index
        @class_periods = ClassPeriod.all
    end
end
