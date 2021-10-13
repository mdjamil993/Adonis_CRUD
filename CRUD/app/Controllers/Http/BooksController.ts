import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Book from 'App/Models/Book'

export default class BooksController {

    public async show(){
        return Book.all()
    }

    public async store({}: HttpContextContract){

        const data = await new Book()

        data.subject = "English"
        data.price = '100'

        await data.save()
    }

    public async update({} : HttpContextContract){
        await Book.query().where('id',1).update({'subject': 'New Subject'})
    }

    public async delete(){
        await Book.query().where('id' , 13).delete() ; 
    }
}
