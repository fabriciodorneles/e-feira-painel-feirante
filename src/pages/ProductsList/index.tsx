import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Header,
    HeaderContent,
    Profile,
    Content,
    Schedule,
    NextAppointment,
    Section,
    Appointment,
    Calendar,
} from './styles';
import logoImg from '../../assets/logo.svg';

interface monthAvailabilityItem {
    day: number;
    available: boolean;
}

interface Appointment {
    id: string;
    date: string;
    hourFormatted: string;
    user: {
        name: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    // useEffect(() => {
    //     api.get<Appointment[]>('/appointments/me', {
    //         params: {
    //             year: selectedDate.getFullYear(),
    //             month: selectedDate.getMonth() + 1,
    //             day: selectedDate.getDate(),
    //         },
    //     }).then((response) => {
    //         const appointmentsFormatted = response.data.map((appointment) => {
    //             return {
    //                 ...appointment,
    //                 hourFormatted: format(parseISO(appointment.date), 'HH:mm'),
    //             };
    //         });
    //         setAppointments(appointmentsFormatted);
    //     });
    // }, [selectedDate]);

    //    const nextAppointment = useMemo(() => {
    //         return appointments.find((appointment) =>
    //             isAfter(parseISO(appointment.date), new Date()),
    //         );
    //     }, [appointments]);

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logoImg} alt="GoBarber" />
                </HeaderContent>
            </Header>

            <Content>
                <Schedule>
                    <h1>Horários Agendados</h1>
                    <Section>
                        <strong>Manhã</strong>

                        {/* {morningAppointments.map((appointment) => (
                            <Appointment key={appointment.id}>
                                <span>
                                    <FiClock />
                                    {appointment.hourFormatted}
                                </span>
                                <div>
                                    <img
                                        src={appointment.user.avatar_url}
                                        alt={appointment.user.name}
                                    />
                                    <strong>{appointment.user.name}</strong>
                                </div>
                            </Appointment>
                        ))} */}
                    </Section>
                    <Section>
                        <strong>Tarde</strong>

                        {/* {afternoonAppointments.length === 0 && (
                            <p>Nenhum agendamento neste período</p>
                        )}

                        {afternoonAppointments.map((appointment) => (
                            <Appointment key={appointment.id}>
                                <span>
                                    <FiClock />
                                    {appointment.hourFormatted}
                                </span>
                                <div>
                                    <img
                                        src={appointment.user.avatar_url}
                                        alt={appointment.user.name}
                                    />
                                    <strong>{appointment.user.name}</strong>
                                </div>
                            </Appointment>
                        ))} */}
                    </Section>
                </Schedule>
            </Content>
        </Container>
    );
};

export default Dashboard;
