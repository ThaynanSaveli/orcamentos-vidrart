// src/components/Header.tsx

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';
import type { IParamsItemOrcamento } from '../models/IParamsItemOrcamento';
import type { IItemOrcamento } from '../models/IItemOrcamento';
import { TIPOS_GRUPO, TIPOS_VIDRO } from '../constants';
import { AutoComplete } from 'primereact/autocomplete';
import { InputNumber } from 'primereact/inputnumber';
import { Card } from 'primereact/card';
import { RxLineHeight, RxWidth } from "react-icons/rx";
import { GiRoad } from 'react-icons/gi';
import { MdHeight } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { TbNumber123 } from 'react-icons/tb';
import { LuScroll } from 'react-icons/lu';
import { FaPersonDigging } from 'react-icons/fa6';
import { IoMdColorPalette } from 'react-icons/io';

export const ItemOrcamento = ({item, removerItem, atualizarItem}: IParamsItemOrcamento) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)
  const [localItem, setLocalItem] = useState<IItemOrcamento>(item);
  const [gruposFiltered, setGruposFiltered] = useState<any[]>([]);
  const [grupoSelecionado, setGrupoSelecionado] = useState({} as any);
  const [produtosFiltered, setProdutosFiltered] = useState<any[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<any>('');

  const handleChange = (field: keyof IItemOrcamento, value: any) => {
    setLocalItem(prev => ({
      ...prev,
      [field]: field === 'grupo' || field === 'tipoProduto' || field === 'quantidade' || field === 'altura' || field === 'largura' || field === 'maoDeObra' || field === 'pc' || field === 'deslocamento' || field === 'plotagem' || field === 'alturaPainel'
        ? Number(value)
        : value,
    }));
  };

  const salvarAlteracoes = () => {
    atualizarItem(item.id, localItem);
    setIsEditing(false);
  };

  const searchGrupos = (event: { query: string }) => {
    const filtered = TIPOS_GRUPO.filter(p => p.descricao.toLowerCase().includes(event.query.toLowerCase()));
    setGruposFiltered(filtered);
  };

  const searchProdutos = (event: { query: string }) => {
    const filtered = TIPOS_VIDRO.filter(p => p.descricao.toLowerCase().includes(event.query.toLowerCase()));
    setProdutosFiltered(filtered);
  };

  useEffect(() => {
  setLocalItem(item);

  // Se o item já tiver valores, preenche os selects com base nele
  if (item.grupo) {
    const grupo = TIPOS_GRUPO.find(g => g.id === item.grupo) || {} as any;
    setGrupoSelecionado(grupo);
  } else {
    setGrupoSelecionado({} as any);
  }

  if (item.tipoProduto) {
    const produto = TIPOS_VIDRO.find(p => p.id === item.tipoProduto) || '';
    setProdutoSelecionado(produto);
  } else {
    setProdutoSelecionado('');
  }
}, [item]);

  return (
    <>
      {
        isEditing ? (
          <div className='col-12'>
            <div className='grid'>
              <div className='col-2'>
                <span className="p-float-label">
                  <AutoComplete
                    className='w-100'
                    inputId="tipoProduto"
                    field="descricao"
                    suggestions={gruposFiltered}
                    completeMethod={searchGrupos}
                    value={grupoSelecionado}
                    onChange={(e) => {
                      if (e.value) {
                        setGrupoSelecionado(e.value)
                        handleChange('grupo', e.value.id);
                      }
                    }}
                  />
                  <label>Grupo</label>
                </span>
              </div>
              <div className='col-2'>
                <span className="p-float-label">
                  <AutoComplete
                    className='w-100'
                    inputId="tipoProduto"
                    field="descricao"
                    disabled={grupoSelecionado.id ? false : true}
                    suggestions={produtosFiltered}
                    completeMethod={searchProdutos}
                    value={produtoSelecionado}
                    onChange={(e) => setProdutoSelecionado(e.value)} // apenas atualiza o estado
                    onSelect={(e) => {
                      setProdutoSelecionado(e.value);
                      handleChange('tipoProduto', e.value.id);
                    }}
                  />
                  <label>Tipo de produto</label>
                </span>
              </div>
              {
                localItem.tipoProduto !== null &&
                <>
                  <div className='col'>
                    <span className="p-float-label">
                      <InputText className='w-100' type="number" value={localItem.quantidade.toString()} onChange={(e) => handleChange('quantidade', e.target.value)} placeholder="Quantidade" />
                      <label htmlFor="quantidade">Quantidade</label>
                    </span>
                  </div>
                  <div className='col'>
                    <span className="p-float-label">
                      <InputText className='w-100' type="number" value={localItem.altura.toString()} onChange={(e) => handleChange('altura', e.target.value)} placeholder="Altura" />
                      <label htmlFor="altura">Altura (mm)</label>
                    </span>
                  </div>
                  <div className='col'>
                    <span className="p-float-label">
                      <InputText className='w-100' type="number" value={localItem.largura.toString()} onChange={(e) => handleChange('largura', e.target.value)} placeholder="largura" />
                      <label htmlFor="altura">Largura (mm)</label>
                    </span>
                  </div>
                  <div className='col'>
                    <span className="p-float-label">
                      <InputText className='w-100' type="number" value={localItem.pc.toString()} onChange={(e) => handleChange('pc', e.target.value)} placeholder="PC" />
                      <label htmlFor="altura">PC (mm)</label>
                    </span>
                  </div>
                  {
                    grupoSelecionado.tipoGrupo === 'porta' &&
                    <>
                      <div className='col'>
                        <span className="p-float-label">
                          <InputText className='w-100' type="number" value={localItem.pc.toString()} onChange={(e) => handleChange('alturaPainel', e.target.value)} placeholder="Altura do painel" />
                          <label htmlFor="alturaPainel">Altura painel (mm)</label>
                        </span>
                      </div>
                      <div className='col'>
                        <span className="p-float-label">
                          <InputText className='w-100' type="number" value={localItem.pc.toString()} onChange={(e) => handleChange('plotagem', e.target.value)} placeholder="Plotagem" />
                          <label htmlFor="plotagem">Plotagem (mm)</label>
                        </span>
                      </div>
                    </>
                  }
                  <div className='col'>
                    <span className="p-float-label">
                      <InputNumber className='w-100' inputId="currency-us" value={localItem.maoDeObra} onValueChange={(e) => handleChange('maoDeObra', e.target.value)} mode="currency" currency="BRL" locale="pt-BR" placeholder="Valor da mão de obra" />
                      <label htmlFor="mao_de_obra">Mão de obra</label>
                    </span>
                  </div>
                  <div className='col'>
                    <span className="p-float-label">
                      <InputNumber className='w-100' inputId="currency-us" value={localItem.deslocamento} onValueChange={(e) => handleChange('deslocamento', e.target.value)} mode="currency" currency="BRL" locale="pt-BR" placeholder="Valor do deslocamento" />
                      <label htmlFor="deslocamento">Deslocamento</label>
                    </span>
                  </div>
                  <div className='col'>
                    <span className="p-float-label">
                      <InputText className='w-100' type='text' value={localItem.corAluminio} onChange={(e) => handleChange('corAluminio', e.target.value)} placeholder="Cor do alumínio" />
                      <label htmlFor="corAluminio">Cor alumínio</label>
                    </span>
                  </div>
                </>
              }
              <div className='flex gap-2 align-items-center'>
                {
                  localItem.tipoProduto &&
                  <Button size='small' className='text-white' icon="pi pi-check" severity='success' aria-label="Filter" style={{ height: '40px'}} onClick={salvarAlteracoes} />
                }
                <Button size='small' className='text-white' icon="pi pi-trash" severity="danger" aria-label="remove" style={{ height: '40px'}} onClick={() => removerItem(item.id)} />
              </div>
            </div>
          </div>
        ) : (
          <>
            {
              localItem && localItem.tipoProduto &&
              <div className='col-3'>
                <Card title={`${TIPOS_GRUPO.find(x => x.id === localItem.grupo)?.descricao} - ${TIPOS_VIDRO.find(x => x.id === localItem.tipoProduto)?.descricao}`}>
                  <div className='grid'>
                    <div className='col-6 flex gap-1 align-items-center'>
                      <TbNumber123 /> <span><b>Quantidade:</b> {localItem.quantidade}</span>
                    </div>
                    <div className='col-6 flex gap-1 align-items-center'>
                      <MdHeight /> <span><b>Altura:</b> {localItem.altura} mm</span>
                    </div>
                    <div className='col-6 flex gap-1 align-items-center'>
                      <RxWidth /> <span><b>Largura:</b> {localItem.largura} mm</span>
                    </div>
                    <div className='col-6 flex gap-1 align-items-center'>
                      <RiComputerLine /> <span><b>PC:</b> {localItem.pc} mm</span>
                    </div>
                    {
                      grupoSelecionado.tipoGrupo === 'porta' &&
                      <>
                        <div className='col-6 flex gap-1 align-items-center'>
                          <RxLineHeight /> <span><b>Altura painel:</b> {localItem.alturaPainel} mm</span>
                        </div>
                        <div className='col-6 flex gap-1 align-items-center'>
                          <LuScroll /> <span><b>Plotagem:</b> {localItem.plotagem} mm</span>
                        </div>
                      </>
                    }
                    <div className='col-6 flex gap-1 align-items-center'>
                      <FaPersonDigging /> <span><b>Mão de obra:</b> R$ {localItem.maoDeObra.toFixed(2)}</span>
                    </div>
                    <div className='col-6 flex gap-1 align-items-center'>
                      <GiRoad /> <span><b>Deslocamento:</b> R$ {localItem.deslocamento.toFixed(2)}</span>
                    </div>
                    <div className='col-6 flex gap-1 align-items-center'>
                      <IoMdColorPalette /> <span><b>Cor do alumínio:</b> {localItem.corAluminio}</span>
                    </div>
                    <div className='col-12'>
                      <div className='flex gap-2 justify-content-center align-items-end'>
                        <Button size='small' className='text-white' label='Editar' icon="pi pi-pencil" severity="info" onClick={() => setIsEditing(true)} />
                        <Button size='small' className='text-white' label='Remover' icon="pi pi-trash" severity="danger" onClick={() => removerItem(item.id)} />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            }
          </>
        )
      }
    </>
  );
};
