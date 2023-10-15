import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { IMaskInput } from 'react-imask';
import * as yup from 'yup';
import './range.css'

const FormItem = ({ item, index, onChange, }) => {


    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    const [touched, setTouched] = useState(false);
    const [validated, setValidated] = useState(false);

    const schema = yup.object().shape({
        cpf: yup.string().required('Por favor insira um CPF válido'),
        email: yup.string().required('Por favor insira um email válido'),
        nome: yup.string().required('Por favor informe um nome'),
        telefone: yup.string().required('Por favor insira um telefone válido'),
    });

    const handleBlur = async (e) => {
        const value = e.target.value;
        const id = e.target.id;
        if (value !== '') {
            try {
                let updatedValue = value;

                if (item.id === 'cpf') {
                    updatedValue = value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos do CPF
                    console.log(updatedValue.length)
                    if (updatedValue.length != 11) {
                        throw new Error('Por favor insira um CPF válido');
                        console.log(updatedValue)
                    }
                } else if (item.id === 'telefone') {
                    updatedValue = value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos do telefone
                    if (updatedValue.length !== 11) {
                        throw new Error('Por favor insira um telefone válido');
                    }
                } else if (item.id === 'email') {
                    if (!validateEmail(value)) {
                        throw new Error('Por favor insira um email válido');
                    }
                } else if (item.id === 'nome') {
                    if (!value) {
                        throw new Error('Por favor informe um nome');
                    }
                }

                await schema.validateAt(id, { [id]: updatedValue }); // Validate individual field
                setValidated(true);
            } catch (error) {
                alert(error.message); // Exibir a mensagem de erro específica
                setValidated(false);
            }
        }
        setTouched(true);
        onChange(value, item.value, item.categoria, item.id);
    }

    switch (item.type) {
        case 'text':

            // switch (item.id) {
            //     case 'cpf':
            //         return (
            //             <>
            //                 <Form.Label className='pergunta'>
            //                     <label className='label_pergunta'>{index + 1}</label>

            //                     <p>{item.label}</p>

            //                 </Form.Label>
            //                 <Form.Control
            //                     as={IMaskInput}
            //                     mask="000.000.000-00"
            //                     placeholder="Digite se CPF"
            //                     maxLength={14}
            //                     minLength={14}
            //                     type='text'
            //                     id={item.id}
            //                     // onChange={(e) => onChange(e.target.value, cpfMask(item.value), item.categoria, item.id)}
            //                     onBlur={handleBlur}
            //                     required
            //                 />
            //                 <Form.Control.Feedback type="invalid">
            //                     Por Favor insira o CPF para continuar
            //                 </Form.Control.Feedback>
            //             </>
            //         );
            //     case 'email':
            //         return (
            //             <>
            //                 <Form.Label className='pergunta'>
            //                     <label className='label_pergunta'>{index + 1}</label>

            //                     <p>{item.label}</p>

            //                 </Form.Label>
            //                 <Form.Control
            //                     as={IMaskInput}
            //                     mask=""
            //                     placeholder="Informe o E-mail para Contato"

            //                     type='text'
            //                     id={item.id}
            //                     // onChange={(e) => onChange(e.target.value, cpfMask(item.value), item.categoria, item.id)}
            //                     onBlur={handleBlur}
            //                     required
            //                 />
            //                 <Form.Control.Feedback type="invalid">
            //                     Por Favor insira o E-mail para continuar
            //                 </Form.Control.Feedback>
            //             </>
            //         );
            //     case 'telefone':
            //         return (
            //             <>
            //                 <Form.Label className='pergunta'>
            //                     <label className='label_pergunta'>{index + 1}</label>

            //                     <p>{item.label}</p>

            //                 </Form.Label>
            //                 <Form.Control
            //                     as={IMaskInput}
            //                     mask="(00) 00000-0000"
            //                     placeholder="Informe o Telefone"
            //                     maxLength={11}
            //                     minLength={11}
            //                     type='text'
            //                     id={item.id}
            //                     // onChange={(e) => onChange(e.target.value, cpfMask(item.value), item.categoria, item.id)}
            //                     onBlur={handleBlur}
            //                     required
            //                 />
            //                 <Form.Control.Feedback type="invalid">
            //                     Por Favor insira o Telefone para continuar
            //                 </Form.Control.Feedback>
            //             </>
            //         );
            //         break;
            //     case 'nome':
            //         return (
            //             <>
            //                 <Form.Label className='pergunta'>
            //                     <label className='label_pergunta'>{index + 1}</label>

            //                     <p>{item.label}</p>

            //                 </Form.Label>
            //                 <Form.Control
            //                     type='text'
            //                     id={item.id}
            //                     onBlur={(e) => onChange(e.target.value, item.value, item.categoria, item.id)}
            //                     required
            //                 />
            //                 <Form.Control.Feedback type="invalid">
            //                     Por Favor informe o seu Nome para continuar
            //                 </Form.Control.Feedback>
            //             </>
            //         );
            //     default:
            //         return (
            //             <>
            //                 <Form.Label className='pergunta'>
            //                     <label className='label_pergunta'>{index + 1}</label>

            //                     <p>{item.label}</p>

            //                 </Form.Label>
            //                 <Form.Control
            //                     type='text'
            //                     id={item.id}
            //                     onChange={(e) => onChange(e.target.value, item.value, item.categoria, item.id)}
            //                 />
            //             </>
            //         );
            // }

            return (<Form.Group className="mb-3  ">
                <Form.Label className='pergunta'>
                    <label className='label_pergunta'>{index }</label>
                    {/* <p>{item.label}</p> */}
                </Form.Label>
                <Form.Control
                    as={item.id === 'cpf' || item.id === 'telefone' || item.id === 'email' || item.id === 'nome' ? IMaskInput : 'input'}
                    mask={item.id === 'cpf' ? '000.000.000-00' :
                        (item.id === 'telefone' ? '(00) 00000-0000' : '')}
                    placeholder={item.placeholder}
                    minLength={item.id === 'cpf' || item.id === 'telefone' ? 11 : ''}
                    maxLength={item.id === 'cpf' || item.id === 'telefone' ? 11 : ''}
                    type='text'
                    id={item.id}
                    onBlur={handleBlur}
                    required
                    isInvalid={touched && !validated}
                />
                <Form.Control.Feedback type="invalid">
                    {item.validate}
                </Form.Control.Feedback>
            </Form.Group>)

        case 'password':
            return (
                <>
                    <Form.Label className='pergunta'>
                        <label className='label_pergunta'>{index + 1}</label>

                        <p>{item.label}</p>

                    </Form.Label>
                    <Form.Control type='password' id={item.id}
                        onChange={(e) => onChange(e.target.value, item.value)}
                    />
                </>
            );
        case 'range':
            return (
                <>
                    <Form.Label className='pergunta'>
                        <label className='label_pergunta'>{index + 1}</label>

                        <p>{item.label}</p>

                    </Form.Label>
                    <Form.Control className='slider display-hidden'
                        type='range' id={item.id} list='markers' min={0} max={2} step={1}
                        onBlur={(e) => onChange(e.target.value, item.value, item.categoria, item.id)} required
                    />

                    <datalist id="markers">
                        <option value="0" label='Não'></option>
                        <option value="1" label='Neutro'></option>
                        <option value="2" label='Sim'></option>
                    </datalist>
                </>
            );
        case 'information':
            return (
                <>
                <div className='pergunta'>
                    <p >{item.label}</p>
                </div>
                

                </>
            );
        default:
            break;
    }

}


function validaCPF(cpf) {
    let soma = 0;
    let resto;
    console.log(cpf.length)
    if (cpf === "00000000000") return false;

    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}
export default FormItem