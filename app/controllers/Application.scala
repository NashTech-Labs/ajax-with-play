package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {

  /**
   * This action is used to serve Home page of the application
   *
   * @return
   */
  def index = Action { implicit request =>
    Ok(views.html.index("Your new application is ready."))
  }

  /**
   * This action is used to handle Ajax request
   *
   * @return
   */
  def ajaxCall = Action { implicit request =>
    Ok("Ajax Call!")
  }

}