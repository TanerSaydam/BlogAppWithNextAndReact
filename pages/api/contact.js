export default function Contact(req,res){   
    const contacts = [];
    contacts.push(req.body);

    res.json(contacts);
}