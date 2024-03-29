export default interface Provider {
    document_provider:string,
    name_provider:string,
    last_name_provider:string,
    email_provider:string, 
    password_provider:string,
    profile_photo_provider?:string | null,
    nit_company:string,
    city_provider:string,
    neighborhood:string,
    street:string,
    number_street:string,
    number_provider:string
}
