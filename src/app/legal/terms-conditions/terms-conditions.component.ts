import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.css'
})
export class TermsConditionsComponent {
  termsConditionsData: any;

  ngOnInit(): void {
    this.termsConditionsData = {
      object: 'Objeto',
      sObject: 'Las presentes condiciones generales de uso de la página web, regulan los términos y condiciones de acceso y uso de https://tuvozatexto.com, propiedad de ECA-SIMM, que el usuario del sitio deberá de leer y aceptar para poder usar todos los servicios e información que se facilitan desde el sitio. El mero acceso y/o utilización del sitio, de todos o parte de sus contenidos y/o servicios significa la plena aceptación de las presentes condiciones generales de uso.',
      condition: 'Condiciones generales de uso',
      sCondition: 'Las condiciones generales de uso del sitio regulan el acceso y la utilización del sitio, incluyendo los contenidos y los servicios. Toda persona que acceda a sitio acepta someterse a las Condiciones Generales vigentes en cada momento.',
      obligation: 'Obligaciones del Usuario',
      sObligation: 'El usuario deberá respetar en todo momento los términos y condiciones establecidos en las presentes condiciones generales de uso del sitio. De forma expresa el usuario se compromete a hacer un uso adecuado de los contenidos de Smellswidom, sin contravenir la legislación vigente, la buena fe y el orden público.',
      sObligation1: 'El usuario no podrá utilizar el sitio para incurrir a actividades ilícitas como transmitir, almacenar, divulgar promover o distribuir datos o contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.',
      sObligation2: 'Queda prohibido el uso de la web, con fines ilícitos o lesivos, que puedan provocar daños que comprometan los sistemas físicos o lógicos de TuVozATexto y/o impedir el funcionamiento normal del sitio.',
      responsability: 'Responsabilidad del sitio.',
      sResponsability: 'El usuario conoce y acepta que el sitio no otorga ninguna garantía de cualquier naturaleza, ya sea expresa o implícita, sobre los datos, contenidos, información y servicios que se incorporan y ofrecen desde el sitio.',
      sResponsability1: 'Exceptuando los casos que la Ley imponga expresamente lo contrario, y exclusivamente con la medida y extensión en que lo imponga, el sitio no garantiza ni asume responsabilidad alguna respecto a los posibles daños y perjuicios causados por el uso y utilización de la información, datos y servicios del sitio.',
      sResponsability2: 'En todo caso, el sitio excluye cualquier responsabilidad por los daños y perjuicios que puedan deberse a la información y/o servicios prestados o suministrados por terceros diferentes al sitio. Toda responsabilidad será del tercero ya sea proveedor o colaborador.',
      intellectual: 'Propiedad intelectual e industrial',
      sIntellectual: 'El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos son propiedad de TuVozATexto o en su caso dispone de licencia o autorización expresa por parte de los autores. Queda expresamente prohibida la creación de enlaces de hipertexto (links) a cualquier elemento integrante del sitio web del sitio sin la autorización de TuVozATexto, siempre que no sean a una página web del sitio que no requiera identificación o autenticación para su acceso, o el mismo esté restringido.',
      sIntellectual1: 'El usuario puede utilizar el material que aparezca en este sitio web para su uso personal, quedando prohibido su uso con fines comerciales.',
      law: 'Ley aplicable y Jurisdicción',
      sLaw: 'Las presentes condiciones generales de uso se rigen y se interpretan de acuerdo con las Leyes de España, a la que se someten expresamente las partes.',
      modifications: 'Modificaciones',
      sModifications: 'ECA-SIMM podrá modificar en cualquier momento las condiciones generales de uso del sitio web. Se recomienda que consulte periódicamente los presentes términos y condiciones de uso del sitio, ya que pueden ser modificados sin previo aviso.',
      contact: 'Contacto',
      sContact: 'En caso de que cualquier usuario tuviera alguna duda acerca de estas Condiciones legales o cualquier comentario sobre el sitio por favor diríjase a gino.uva.2023.2024@gmail.com.'
    };
  }

}
