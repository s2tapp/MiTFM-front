import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  privacyData: any;

  ngOnInit(): void {
    this.privacyData = {
      info: 'En la presente Política de Privacidad se establece los términos en las que TuVozATexto usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Este sitio web está comprometido con la seguridad de los datos de sus usuarios.',
  info1: 'En este sitio no se recoge información de carácter personal de los usuarios sin su conocimiento ni se ceden a terceros.',
  info2: 'TuVozATexto utiliza cookies de terceros para recoger información con fines estadísticos y de uso de la web, se utilizan cookies técnicas y cookies de personalización que permiten la navegación a través del sitio web.',
  info3: 'Este sitio web contiene enlaces a sitios web de terceros, cuyas políticas de privacidad son ajenas a TuVozATexto. Al acceder a tales sitios web usted puede decidir si acepta o no sus políticas de privacidad y de cookies.',
  purpose: 'FINALIDAD DE LA INFORMACIÓN RECOGIDA',
  sPurpose: 'TuVozATexto emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios.',
  sPurpose1: 'TuVozATexto está altamente comprometido para cumplir con el compromiso de mantener su información segura. Se utilizan sistemas y tecnologías para asegurar que no exista un acceso no autorizado a sus datos.',
  control: 'CONTROL DE SU INFORMACIÓN PERSONAL',
  sControl: 'En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.',
  sControl1: 'TuVozATexto no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con una orden judicial.',
  sControl2: 'TuVozATexto se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.',
  rights: 'DERECHOS DE LOS INTERESADOS',
  sRights: 'Cualquier persona tiene derecho a obtener información sobre los tratamientos que de sus datos que se llevan a cabo por parte de TuVozATexto.',
  sRights1: 'Puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad de sus datos, de limitación y oposición a su tratamiento, así como a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de sus datos, cuando procedan, ante el delegado de protección de datos en la siguiente dirección de correo electrónico gino.uva.2023.2024@gmail.com y/o presentar una reclamación ante la Agencia Española de Protección de Datos a través de su página web.',
  modification: 'MODIFICACIÓN DE LA POLÍTICA DE PRIVACIDAD',
  sModification: 'ECA-SIMM se reserva el derecho a modificar su Política de privacidad, de acuerdo a su propio criterio, motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos.'
    };
  }
}
