import { logger } from '../utils/Logger'


class ContactService{
  submitContactForm(value) {
    logger.log('the form being submitted is', value)
  }

}

export const contactService = new ContactService()