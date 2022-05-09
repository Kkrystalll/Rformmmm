class SurveysController < ApplicationController
  before_action :find_survey, only: %i[show edit update destroy]

  def index
    @surveys = current_user.surveys
  end

  def show; end

  def new
    @survey = Survey.new
  end

  def edit; end

  def create
    @survey = current_user.surveys.new(survey_params)
    
    if @survey.save
      
      render :edit
      # redirect_to edit_survey_path(@survey), notice: "新增問卷成功"
    else
      render :new
    end
  end

  def update
    if @survey.update(survey_params)
    #   redirect_to survey_path(@survey), notice: "修改成功"
    # else
      # render :edit
    end
  end

  def destroy
    @survey.destroy

    redirect_to surveys_path, notice: '問卷已刪除'
  end

  def sort
    
    survey = current_user.surveys.find(params[:id])
    survey.insert_at(params[:newIndex].to_i)
    render html: params
  end

  def question_sort
    question = Question.new
    question.insert_at(params[:newIndex].to_i)
    render html: params
  end

  private

  def find_survey
    @survey = current_user.surveys.find(params[:id])
  end

  def survey_params
    params.require(:survey).permit(
      :title,
      :description,
      :position,
      questions_attributes: [
        :_destroy,
        :id,
        :question_type,
        :title,
        :required,
        :position,
        { answers_attributes: %i[
          _destroy
          id
          title
        ] }
      ]
    )
  end
end