class Api::V1::SurveysController < ApplicationController
  def add_survey
    @answer = Answer.new(answer_params)
    @question = Question.new(question_params)
    @survey = Survey.new(survey_params)
    
   
    @question.answers=[@answer]
    @survey.questions=[@question]

    render html: params
    # if @survey.save 
    #   redirect_to root_path
    # else
    #   render template: "surveys/new"
    # end
  end

  def add_question
    render layout: false
  end

  def add_answer
    render layout: false
  end

  private
  def survey_params
    params.require(:survey).permit(:title,:description)
  end

  def question_params
    params.require(:question).permit(:title, :question_type)
  end

  def answer_params
    params.permit(:title)
  end
end