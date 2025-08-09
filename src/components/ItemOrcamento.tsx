// src/components/Header.tsx

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';
import type { IParamsItemOrcamento } from '../models/IParamsItemOrcamento';
import type { IItemOrcamento } from '../models/IItemOrcamento';
import { TIPOS_GRUPO, TIPOS_VIDRO } from '../constants';
import { AutoComplete } from 'primereact/autocomplete';
import { InputNumber } from 'primereact/inputnumber';

export const ItemOrcamento = ({item, removerItem, atualizarItem}: IParamsItemOrcamento) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)
  const [localItem, setLocalItem] = useState<IItemOrcamento>(item);
  const [gruposFiltered, setGruposFiltered] = useState<any[]>([]);
  const [grupoSelecionado, setGrupoSelecionado] = useState({} as any);
  const [produtosFiltered, setProdutosFiltered] = useState<any[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState('');

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
  }, [item]);

  return (
    <div className='flex w-100 mt-5 align-items-center grid'>
      {
        isEditing ? (
          <>
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
                        <InputText className='w-100' type="number" value={localItem.pc.toString()} onChange={(e) => handleChange('pc', e.target.value)} placeholder="PC" />
                        <label htmlFor="altura">Altura painel (mm)</label>
                      </span>
                    </div>
                    <div className='col'>
                      <span className="p-float-label">
                        <InputText className='w-100' type="number" value={localItem.pc.toString()} onChange={(e) => handleChange('pc', e.target.value)} placeholder="PC" />
                        <label htmlFor="altura">Plotagem (mm)</label>
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
            <div className='flex gap-2 align-items-end'>
              {
                localItem.tipoProduto &&
                <Button size='small' className='text-white' icon="pi pi-check" severity='success' aria-label="Filter" style={{ height: '40px'}} onClick={salvarAlteracoes} />
              }
              <Button size='small' className='text-white' icon="pi pi-trash" severity="danger" aria-label="remove" style={{ height: '40px'}} onClick={() => removerItem(item.id)} />
            </div>
          </>
        ) : (
          <>
            {
              localItem && localItem.tipoProduto &&
              <>
                <span><b>Produto:</b> {TIPOS_VIDRO.find(x => x.id === localItem.tipoProduto)?.descricao}</span>
                <span><b>Quantidade:</b> {localItem.quantidade}</span>
                <span><b>Altura:</b> {localItem.altura}</span>
                <span><b>Largura:</b> {localItem.largura}</span>
                <span><b>Cor do alumínio:</b> {localItem.corAluminio}</span>
                <span><b>Mão de obra:</b> R$ {localItem.maoDeObra.toFixed(2)}</span>
                <div className='flex gap-2 align-items-end'>
                  <Button className='text-white' icon="pi pi-pencil" severity="info" onClick={() => setIsEditing(true)} />
                  <Button className='text-white' icon="pi pi-trash" severity="danger" onClick={() => removerItem(item.id)} />
                </div>
              </>
            }
          </>
        )
      }
    </div>
  );
};
